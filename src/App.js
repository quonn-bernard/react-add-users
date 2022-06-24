import React, {useState} from 'react';
import styles from './App.module.css';
import { UserForm } from './components/UsersForm/UserForm';
import {UserList} from './components/Users/UserList';

const APP_USERS = [
  {name: 'John', age: 31},
  {name: 'Mike', age: 27},
  {name: 'Everret', age: 56},
  {name: 'Quonn', age: 17}
]

const App = () => {

  const [userList, setUserList] = useState(APP_USERS);

  return (
    <div className={styles.App}>
      <UserForm></UserForm>
      <UserList userList={userList}></UserList>
    </div>
  );
}

export default App;
