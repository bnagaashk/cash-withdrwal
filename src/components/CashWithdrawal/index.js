import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  vlaueCut = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main">
        <div className="cashWithdrwal-CContainer">
          <div className="top-con">
            <button type="button" className="profile">
              <span className="span">S</span>
            </button>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p className="heading">Your Balance</p>
            <p className="Money">{amount}</p>
          </div>
          <div className="money-container">
            <p className="heading2">Withdraw</p>
            <p className="des">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list">
              {denominationsList.map(each => (
                <DenominationItem
                  moneyDetails={each}
                  key={each.id}
                  deductMoney={this.vlaueCut}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
