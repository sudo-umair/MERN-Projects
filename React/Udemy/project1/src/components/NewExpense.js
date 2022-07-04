import React, { useState } from "react";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [formFilled, setFormFilled] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || date === "" || price === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      setFormFilled(true);

      const expenseData = {
        name: name,
        date: new Date(date),
        price: price,
      };

      props.onSaveExpense(expenseData);

      setName("");
      setDate("");
      setPrice("");
    }
  };

  return (
    <div className="new-expense">
      <form className="form-new-expense" action="" onSubmit={handleSubmit}>
        <div className="new-expense-row">
          <label htmlFor="name">Expense</label>
          <input
            type="text"
            id="name"
            className="input-expense-name"
            value={name}
            placeholder="Food"
            onChange={handleNameChange}
          />
        </div>
        <br />
        <div className="new-expense-row">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            min={0}
            step={10}
            className="input-expense-price"
            value={price}
            placeholder="120"
            onChange={handlePriceChange}
          />
        </div>
        <br />
        <div className="new-expense-row">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="input-expense-date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <br />
        <div className="new-expense-row">
          <button type="submit" className="btn-add-expense">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
