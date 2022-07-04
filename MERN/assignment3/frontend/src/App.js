import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-3" style={{ width: "30%" }}>
        <Form />
      </div>
    </div>
  );
}

export default App;
