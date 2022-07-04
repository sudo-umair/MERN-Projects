import "./App.css";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";

function App() {
  return (
    <div className="main">
      <div className="box">
        <img className="photo" src={html} alt="" srcset="" />
        <p className="desc">
          HTML is a markup language used to create web pages.
        </p>
        <hr />
      </div>
      <div className="box">
        <img className="photo" src={css} alt="" srcset="" />
        <p className="desc">Css is a language used to style web pages.</p>
        <hr />
      </div>
      <div className="box">
        <img className="photo" src={js} alt="" srcset="" />
        <p className="desc">
          Js is a language used to create interactive web pages.
        </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
