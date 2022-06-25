import React, {useState} from 'react';
import styles from './App.module.css';
import { UserForm } from './components/UsersForm/UserForm';
import {UserList} from './components/Users/UserList';

const APP_USERS = [
  {id: 'u1', name: 'John', age: 31},
  {id: 'u2', name: 'Mike', age: 27},
  {id: 'u3', name: 'Everret', age: 56},
  {id: 'u4',name: 'Quonn', age: 17}
]

const App = () => {

  const [userList, setUserList] = useState(APP_USERS);

  const addUser = data => {
    setUserList(prevUserList => [data, ...prevUserList])
  }

  return (
    <div className={styles.App}>
      <UserForm addUser={addUser} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
