import React from "react";

export default function Button(props) {
  return (
    <button
      className="btn btn-primary"
      style={{ margin: "10px" }}
      onClick={props.onModeChange}
    >
      {props.title}
    </button>
  );
}
