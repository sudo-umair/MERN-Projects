import React from "react";

export default function Progress(props) {
  const style = {
    width : props.value + "%"
  };
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar"
          style={style}
          role="progressbar"
          aria-valuenow={props.value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.value}%
        </div>
      </div>
    </>
  );
}
