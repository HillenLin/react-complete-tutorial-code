import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return props.items.map((item, index) => {
    return (
      <Card otherClassName="expenses" key={index}>
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      </Card>
    );
  });
}

export default Expenses;
