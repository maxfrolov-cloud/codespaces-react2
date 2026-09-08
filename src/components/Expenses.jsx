import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from './Card';

const Expenses = (props) => {
  console.log(props.data[0]);
  return (
    <Card className="expenses">
      <ExpenseItem data={props.data[0]} />
      <ExpenseItem data={props.data[1]} />
    </Card>
  );
};

export default Expenses;