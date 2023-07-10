import './index.css'

const DenominationItem = props => {
  const {moneyDetails, deductMoney} = props
  const {value} = moneyDetails
  const onClickbutton = () => {
    deductMoney(value)
  }
  return (
    <li className="item">
      <button type="button" className="btn" onClick={onClickbutton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
