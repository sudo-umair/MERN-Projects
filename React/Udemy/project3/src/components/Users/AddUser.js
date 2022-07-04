import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";
import Modal from "../UI/Modal";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  // const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = (error) => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const nameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;

    console.log(nameInputRef.current.value, ageInputRef.current.value);

    if (nameInput.trim().length < 1 || ageInput.trim().length < 1) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid username and age to proceed.",
      });
      return;
    }

    if (ageInput < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age to proceed. <1",
      });
      return;
    }

    // console.log(enteredUsername, enteredAge);
    props.onAddUser(nameInput, ageInput);
    // setEnteredAge("");
    // setEnteredUsername("");

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
