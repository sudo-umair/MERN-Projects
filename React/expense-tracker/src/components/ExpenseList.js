import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  return (
    <div className="container-fluid">
      <center>
        <h1>Expenses</h1>
      </center>

      <div className="d-flex flex-wrap justify-content-center mb-2">
        {props.expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
            onDelete={() => props.deleteExpenseItem(expense.id)}
            onUpdate={() =>
              props.updateExpenseItem(
                expense.id,
                expense.name,
                expense.amount,
                expense.date
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
