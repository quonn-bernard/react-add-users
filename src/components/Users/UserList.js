import styles from './UserList.module.css';
import { Card } from '../UI/Card';
import { User } from '../Users/User';

export const UserList = props => {

    return  <Card>
                <ul className={styles.list}>
                    {props.userList.map(user => {
                       return <User name={user.name} age={user.age}></User>
                    })}
                </ul>
            </Card>
}