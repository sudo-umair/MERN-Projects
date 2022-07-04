import React from "react";
import Card from "../UI/Card";
import userListStyle from '../Users/UserList.module.css';


export default function UserList(props) {
  return (
    <Card className={userListStyle.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
}
