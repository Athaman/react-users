import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (name, age) => {
    setUsers((prevState) => {
      return [...prevState, { id: Math.random().toString(), name, age }];
    });
  };

  return (
    <>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={users} />
    </>
  );
}

export default App;
