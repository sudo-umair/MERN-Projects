import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {

  return (
    <div className="expense-row">
      <div className="expense-row__date">
        <ExpenseDate date={props.date}/>
      </div>
      <div className="expense-row__name">
        <p className="expense__name">{props.name}</p>
      </div>
      
      <div className="expense-row__price">
        <p className="expense__price">Rs. {props.price}</p>
      </div>
    </div>
  );
}
