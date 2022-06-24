import { Card } from "../UI/Card";
import styles from './UserForm.module.css';
import { Button } from "../UI/Button";

export const UserForm = props => {

    return <Card>
                <div className={styles['form-control']} >
                        <form className={`${styles['form-control__form']}`}>
                            <label>User Name</label>
                            <input className={`${styles['form-control__input']}`}  type="text"></input>
                            <label>User Age</label>
                            <input className={`${styles['form-control__input']}`} type="number"></input>
                            <Button></Button>
                        </form>
                    </div>
            </Card>    
    
}