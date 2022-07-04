import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`

// margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.inValid ? "red" : "black"};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${(props) => props.inValid ? "red" : "#ccc"};
//   background: ${(props) => props.inValid ? "#ffd7d7" : "transparent"};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// // &.inValid input{
// //   border-color: red;
// //   background-color: #ffd7d7;
// // }

// // &.inValid label{
// //   color: red;
// // }

// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'inValid'}> */}
      <div className={`${styles['form-control']} ${!isValid && styles.inValid}`}>
        <label
        // style={{ color: !isValid ? "red" : "black" }}
        >
          Course Goal
        </label>
        <input
          // style={{
          //   borderColor: !isValid ? "red" : "#ccc",
          //   backgroundColor: !isValid ? "salmon" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
