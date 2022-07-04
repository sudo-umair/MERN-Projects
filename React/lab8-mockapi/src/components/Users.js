import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const url = "https://6298bc5ede3d7eea3c6edcb9.mockapi.io/users/10";
  const [users, setUsers] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Muhammad Umair</h1> <hr />
      <img src={users.avatar} />
      <h1>{users.name}</h1>
      <h1>{users.age}</h1>
    </div>
  );
}
