import React from "react";
import styles from "./UsersList.module.css";
import Card from "../../UI/Card";

const UsersList = (props) => {
  // const deleteHandler = () => {
  //   const userIdArr = props.users.map((user) => user.id);
  //   props.onDelete(userIdArr);
  // };

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((data) => (
          <li key={data.id}>
            {data.username} ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
