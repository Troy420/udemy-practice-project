import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [userData, setUserData] = useState([]);

  const saveDataHandler = (data) => {
    setUserData((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div>
      <AddUser onSaveData={saveDataHandler} />
      <UsersList users={userData} />
    </div>
  );
};

export default App;
