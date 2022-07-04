import './App.css';

function toConvert() {
  let value = document.getElementById("input").value;
  let output = document.getElementById("output");

  let input_date = new Date(value);
  let today_date = new Date();

  const ONE_DAY = 1000 * 60 * 60 * 24;

  const differenceMs = Math.abs(input_date - today_date);

  output.innerText = Math.round(differenceMs / ONE_DAY);
}

function App() {
  return (
    <div className="container">
      <div className="input__age">
        <p className="text">Enter your DOB below </p>
        <input type="date" id="input" className="age" />
        <button onClick={toConvert} id="convert">
          Convert
        </button>
      </div>
      <div className="result">
        <p className="text">No. of days are</p>
        <p id="output"></p>
      </div>
    </div>
  );
}

export default App;
