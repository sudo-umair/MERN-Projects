import React, { useRef, useState } from "react";

export default function FormColor() {
  const bgColorRef = useRef(null);
  const textColorRef = useRef(null);

  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const [userStyle, setUserStyle] = useState({
    backgroundColor: bgColor,
    color: textColor,
  });

  const formOnSubmit = (event) => {
    event.preventDefault();
    console.log("formOnClick");
    console.log(bgColorRef.current.value);
    console.log(textColorRef.current.value);

    setBgColor(bgColorRef.current.value);
    setTextColor(textColorRef.current.value);

    setUserStyle({
      backgroundColor: bgColorRef.current.value,
      color: textColorRef.current.value,
    });
  };

  return (
    <form onSubmit={formOnSubmit} style={userStyle}>
      <div className="form-group my-3 px-3 py-3">
        <div className="input-row">
          <label className="form-label">Background Color</label>
          <input
            className="form-control form-control-color"
            type="color"
            ref={bgColorRef}
          />
        </div>
        <div className="input-row">
          <label className="form-label">Text Color</label>
          <input
            className="form-control form-control-color"
            type="color"
            ref={textColorRef}
          />
        </div>
        <button className="btn btn-primary my-3" type="submit">
          Toggle Mode
        </button>
      </div>
    </form>
  );
}
