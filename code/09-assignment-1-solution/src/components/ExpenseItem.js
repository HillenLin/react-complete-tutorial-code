/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card'

const ExpenseItem = props => {
  const clickHandle = () => {

  }

  return (
    <Card otherClassName="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandle}>Click</button>
    </Card>
  )
}

export default ExpenseItem
