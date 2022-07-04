import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Toggle Dark Mode");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const toggleDarkMode = () => {
    if (style.color === "white") {
      setStyle({ color: "black", backgroundColor: "white" });
      setBtnText("Toggle Dark Mode");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Toggle Light Mode");
    }
  };

  return (
    <div className="container my-3" style={style}>
      <h1>{props.heading}</h1>
      <form>
        <div style={style} className="form-group my-3">
          <textarea
            className="form-control"
            id="textarea"
            value={text}
            rows="7"
            onChange={handleOnChange}
            style={style}
          />
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={handleUpClick}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleLowClick}
          >
            Lowercase
          </button>
          <button type="button" className="btn btn-primary" onClick={clearText}>
            Clear Text
          </button>
        </div>
        <div className="card" style={style}>
          <div className="card-body">
            <h5 className="card-title">Page Summary</h5>
            <p className="card-text">
              {text.split(" ").length} words and {text.length} characters
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={toggleDarkMode}
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}
