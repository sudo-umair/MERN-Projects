import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Accordion/>
      </div>
    </div>
  );
}

export default App;
