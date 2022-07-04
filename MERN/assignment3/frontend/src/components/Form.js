import React, { useRef } from "react";
import axios from "axios";

export default function Form() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const baseUrl = "http://localhost:4004";

  const onLoginHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    axios
      .post(`${baseUrl}/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSignupHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    axios
      .post(`${baseUrl}/signup`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          ref={emailRef}
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput2"
          ref={passwordRef}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" id="login" onClick={onLoginHandler}>
          Login
        </button>
        <button
          className="btn btn-primary mx-2"
          id="signup"
          onClick={onSignupHandler}
        >
          Signup
        </button>
      </div>
    </form>
  );
}
