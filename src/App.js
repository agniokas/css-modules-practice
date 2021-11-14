import React, { useState } from 'react';

import AddUserForm from './components/Users/AddUserForm';
import UserList from './components/Users/UserList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
