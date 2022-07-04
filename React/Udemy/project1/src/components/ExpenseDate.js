import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <p className="date__year">{props.date.toDateString().split(" ")[3]}</p>
      <p className="date__date">{props.date.toDateString().split(" ")[2]}</p>
      <p className="date__month">{props.date.toDateString().split(" ")[1]}</p>
    </div>
  );
}
