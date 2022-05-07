import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_DATA = [
  {
    id: "id1",
    username: "Bernard",
    age: 33,
  },
];

const App = () => {
  const [userData, setUserData] = useState(DUMMY_DATA);

  const saveDataHandler = (data) => {
    setUserData((prevState) => {
      return [data, ...prevState];
    });
  };

  // const deleteItemHandler = (userId) => {
  //   console.log("userId", userId);

  //   setUserData((prevState) => {
  //     const updatedGoals = prevState.filter((user) => user.id !== userId);

  //     return updatedGoals;
  //   });
  // };

  return (
    <Fragment>
      <AddUser onSaveData={saveDataHandler} />
      <UsersList users={userData} />
    </Fragment>
  );
};

export default App;
