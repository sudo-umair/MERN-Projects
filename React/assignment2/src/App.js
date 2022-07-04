import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <UserForm />
      </div>
    </div>
  );
}

export default App;
