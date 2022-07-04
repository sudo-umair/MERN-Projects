import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const input = useRef(null);
  // const output = useRef(null);
  const [output, setOutput] = useState("");

  const toConvert = () => {
    // let value = document.getElementById("input").value;
    // let output = document.getElementById("output");

    console.log(input.current.value);
    const input_date = new Date(input.current.value);
    const today_date = new Date();

    const ONE_DAY = 1000 * 60 * 60 * 24;

    const differenceMs = Math.abs(input_date - today_date);

    const days = Math.round(differenceMs / ONE_DAY);
    setOutput(days);
  };

  return (
    <div className="container">
      <div className="input__age">
        <p className="text">Enter your DOB below </p>
        <input type="date" id="input" className="age" ref={input} />
        <button onClick={toConvert} id="convert">
          Convert
        </button>
      </div>
      <div className="result">
        <p className="text">No. of days are</p>
        <p id="output">{output}</p>
      </div>
    </div>
  );
}

export default App;
