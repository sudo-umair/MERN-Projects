import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Button from "./Components/Button";

function App() {
  const colorModes = [
    {
      id: "light",
      color: "black",
      backgroundColor: "white",
      border: "2px solid grey",
      borderRadius: "5px",
    },
    {
      id: "dark",
      color: "white",
      backgroundColor: "black",
      border: "2px solid white",
      borderRadius: "5px",
    },
  ];
  const [mode, setMode] = useState(colorModes[0]);
  const [title, setTitle] = useState("Dark Mode");

  const modeSwitcher = () => {
    if (mode.id === "light") {
      setMode(colorModes[1]);
      setTitle("Light Mode");
    } else if (mode.id === "dark") {
      setMode(colorModes[0]);
      setTitle("Dark Mode");
    }
  };

  return (
    <div className="container" style={{ width: "50%", marginTop: "20px" }}>
      <Form style={mode} />
      {/* <Dropdown onClick={modeSwitcher}/> */}
      <Button title={title} onModeChange={modeSwitcher} />
    </div>
  );
}

export default App;
