import React, { useRef } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Label from "./UI/Label";

export default function ExpenseForm(props) {
  const nameInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const resetForm = () => {
    nameInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    const name = nameInputRef.current.value;
    const amount = amountInputRef.current.value;
    const date = dateInputRef.current.value;

    if (name === "" || amount === "" || date === "") {
      alert("Please fill all the fields");
    }
    else {
    props.onChangeExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        id: prevExpenses.length + 1,
        name: name,
        amount: amount,
        date: date,
      },
    ]);
    console.log(props.expenses);
    resetForm();
    }
  };
  return (
    <form className="expenseForm" onSubmit={formSubmitHandler}>
      <div className="m-3 row">
        <Label htmlFor="expenseName">Expense Name</Label>
        <div className="col-sm-10">
          <Input
            id="expenseName"
            type="text"
            placeholder="Food"
            innerRef={nameInputRef}

          />
        </div>
      </div>
      <div className="m-3 row">
        <Label htmlFor="expenseAmount">Expense Amount</Label>
        <div className="col-sm-10">
          <Input
            id="expenseAmount"
            type="number"
            placeholder="Rs. 100"
            innerRef={amountInputRef}
          />
        </div>
      </div>
      <div className="m-3 row">
        <Label htmlFor="expenseDate">Expense Date</Label>
        <div className="col-sm-10">
          <Input
            id="expenseDate"
            type="date"
            placeholder="01/01/2020"
            innerRef={dateInputRef}
          />
        </div>
      </div>
      <center>
        <Button type="submit" className="btn-primary">
          {props.buttonTitle}
        </Button>
      </center>
    </form>
  );
}
