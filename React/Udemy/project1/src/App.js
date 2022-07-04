import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Navbar from "./components/Navbar";
import NewExpense from "./components/NewExpense";

const Details = [
  {
    id: 0,
    name: "Petrol",
    date: new Date("2020-01-01"),
    price: "100",
  },
  {
    id: 1,
    name: "Food",
    date: new Date("2020-01-02"),
    price: "140",
  },
  {
    id: 2,
    name: "Food",
    date: new Date("2020-01-02"),
    price: "200",
  },
  {
    id: 3,
    name: "Rent",
    date: new Date("2020-01-03"),
    price: "300",
  },
];

function App() {
  const [expenseDetails, setExpenseDetails] = useState(Details);

  const saveExpenseHandler = (expense) => {
    setExpenseDetails((prevExpenseDetails) => {
      return [expense, ...prevExpenseDetails];
    });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="app">
        <NewExpense onSaveExpense={saveExpenseHandler} />
        {expenseDetails.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            date={expense.date}
            price={expense.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
