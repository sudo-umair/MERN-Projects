import React from "react";
export default function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {props.title}
          </a>
        </div>
      </nav>
    </>
  );
}
