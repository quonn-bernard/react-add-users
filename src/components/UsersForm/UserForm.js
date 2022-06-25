import React, {useState} from 'react';
import { Card } from "../UI/Card";
import styles from './UserForm.module.css';
import { Button } from "../UI/Button";
import { Modal } from '../UI/Modal';

export const UserForm = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();
    const [errorMessage, setErrorMessage] = useState('Please enter valid name and age');

    const handleNameInputChange = event => {
        setUserName(event.target.value)
        if(event.target.value.trim().length < 1) {
            setError(true)
        }
    }

    const handleAgeInputChange = event => {
        setUserAge(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        if(userAge.trim().length === 0 || userName.trim().length === 0) {
            setError(true)
        }else if(+userAge < 1){
            setError(true)
            setErrorMessage('Age must be greater than 0')
        } else{
        event.preventDefault();
        const formData = {
            id: Math.random(),
            name: userName,
            age: userAge
        }
        props.addUser(formData)
    }
    setUserAge('');
    setUserName('');
    } 

    const handleModalDissmisal = () => {
        setError(false);
    }

    return <div>
            {error && <Modal title={'Invalid Input'} message={errorMessage} onModalDissmisal={handleModalDissmisal} show={error}/> }
                <Card>
                    <div className={styles['form-control']} >
                        <form onSubmit={handleFormSubmit} className={`${styles['form-control__form']}`}>
                            <label htmlFor="username">User Name</label>
                            <input id="username" value={userName} onChange={handleNameInputChange} className={`${styles['form-control__input']}`}  type="text"></input>
                            <label>User Age</label>
                            <input value={userAge} onChange={handleAgeInputChange} className={`${styles['form-control__input']}`} type="number"></input>
                            <Button type={"submit"}>Add New User</Button>
                        </form>
                    </div>
                </Card>    
            </div>
    
}