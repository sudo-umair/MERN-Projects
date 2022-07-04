import React from "react";

export default function Dropdown(props) {
  const myStyles = [
    {
      color: "black",
      backgroundColor: "white",
    },
    {
      color: "white",
      backgroundColor: "#1f1f1f",
    },
    {
      color: "white",
      backgroundColor: "blue",
    },
  ];

  const changeTheme = (args) => {
    if (args === 'w'){
      props.onChange(myStyles[0]);
    }
    else if (args === 'g'){
      props.onChange(myStyles[1]);
    }
    else if (args === 'b'){
      props.onChange(myStyles[2]);
    }
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        style={props.style}
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Change Theme
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a
            className="dropdown-item"
            style={myStyles[0]}
            onClick={() => changeTheme("w")}
            href="#"
          >
            White
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            style={myStyles[1]}
            onClick={() => changeTheme("g")}
            href="#"
          >
            Dark
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            style={myStyles[2]}
            onClick={() => changeTheme("b")}
            href="#"
          >
            Blue
          </a>
        </li>
      </ul>
    </div>
  );
}
