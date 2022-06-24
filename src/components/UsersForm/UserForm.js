import React, {useState} from 'react';
import { Card } from "../UI/Card";
import styles from './UserForm.module.css';
import { Button } from "../UI/Button";

export const UserForm = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleNameInputChange = event => {
        setUserName(event.target.value)
    }

    const handleAgeInputChange = event => {
        setUserAge(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const formData = {
            id: Math.random(),
            name: userName,
            age: userAge
        }
        props.addUser(formData)
        setUserAge('');
        setUserName('');
    } 

    return <Card>
                <div className={styles['form-control']} >
                        <form onSubmit={handleFormSubmit} className={`${styles['form-control__form']}`}>
                            <label>User Name</label>
                            <input value={userName} onChange={handleNameInputChange} className={`${styles['form-control__input']}`}  type="text"></input>
                            <label>User Age</label>
                            <input value={userAge} onChange={handleAgeInputChange} className={`${styles['form-control__input']}`} type="number"></input>
                            <Button type="submit"></Button>
                        </form>
                    </div>
            </Card>    
    
}