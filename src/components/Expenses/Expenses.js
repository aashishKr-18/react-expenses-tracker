import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [state, setState] = useState(props);

  return (
    <Card className="expenses">
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
}

export default Expenses;
