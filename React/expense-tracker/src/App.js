import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Navbar from "./components/Navbar";
import ExpenseList from "./components/ExpenseList";

function App() {
  const expensesList = [
    {
      id: 1,
      name: "Rent",
      amount: "1500",
      date: "01/01/2020"
    },
    {
      id: 2,
      name: "Food",
      amount: "100",
      date: "01/01/2020"
    },
    {
      id: 3,
      name: "Grocery",
      amount: "200",
      date: "01/01/2020"
    },
    {
      id: 4,
      name: "Clothes",
      amount: "300",
      date: "01/01/2020"
    },
    {
      id: 5,
      name: "Shoes",
      amount: "400",
      date: "01/01/2020"
    },
    
  ]

  const [expenses, setExpenses] = useState(expensesList);

  const deleteExpenseItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  } 

  const updateExpenseItem = (id, name, amount, date) => {
    setExpenses(expenses.map(expense => {
      if (expense.id === id) {
        expense.name = name;
        expense.amount = amount;
        expense.date = date;
      }
      return expense;
    }));
  }


  return (
    <div className="App">
      <Navbar/>
      <div className="container-sm">
        <ExpenseForm expenses={expenses} onChangeExpenses={setExpenses} buttonTitle="Add Expense" />
        <hr />
        <ExpenseList expenses={expenses} updateExpenseItem={updateExpenseItem} deleteExpenseItem={deleteExpenseItem}/>
      </div>
    </div>
  );
}

export default App;
