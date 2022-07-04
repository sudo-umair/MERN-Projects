import React, { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Form from "./components/Form";
import Navbar from "./components/Navbar";


function App() {
  const [style, setStyle] = useState(null);

  const onChangeHandler = (style) => {
    setStyle(style);
  };
  
  return (
    <div className="App">
      <Navbar title="LabExam - Web2 - 12093" />
      <div className="container my-3" style={style}>
        <Form />
      </div>
      <div className="container my-3">
      <Dropdown style={style} onChange={onChangeHandler} />
      </div>
    </div>
  );
}
export default App;
