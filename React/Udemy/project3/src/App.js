import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const dummyUsers = [{
    id: Math.random(),
    name: "Max",
    age: 27
  }]
  const [usersList, setUsersList] = useState(dummyUsers);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { id: Math.random(), name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
