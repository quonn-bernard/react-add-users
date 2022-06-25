import React, {useState, useRef} from 'react';
import { Card } from "../UI/Card";
import styles from './UserForm.module.css';
import { Button } from "../UI/Button";
import { Modal } from '../UI/Modal';
import { Wrapper } from '../Helpers/Wrapper';

export const UserForm = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();
    const [errorMessage, setErrorMessage] = useState('Please enter valid name and age');



    const handleFormSubmit = event => {
        event.preventDefault()
        const nameInputValue = nameInputRef.current.value
        const ageInputValue = ageInputRef.current.value
        if(ageInputValue.trim().length === 0 || nameInputValue.trim().length === 0) {
            setError(true)
        }else if(+ageInputValue < 1){
            setError(true)
            setErrorMessage('Age must be greater than 0')
        } else{
        event.preventDefault();
        const formData = {
            id: Math.random(),
            name: nameInputValue,
            age: ageInputValue
        }
        props.addUser(formData)
        ageInputRef.current.value = '';
        nameInputRef.current.value = '';
    }
    } 

    const handleModalDissmisal = () => {
        setError(false);
    }

    return <Wrapper>
            {error && <Modal title={'Invalid Input'} message={errorMessage} onModalDissmisal={handleModalDissmisal} show={error}/> }
                <Card>
                    <div className={styles['form-control']} >
                        <form onSubmit={handleFormSubmit} className={`${styles['form-control__form']}`}>
                            <label htmlFor="username">User Name</label>
                            <input ref={nameInputRef} id="username" className={`${styles['form-control__input']}`}  type="text"></input>
                            <label>User Age</label>
                            <input ref={ageInputRef} className={`${styles['form-control__input']}`} type="number"></input>
                            <Button type={"submit"}>Add New User</Button>
                        </form>
                    </div>
                </Card>    
            </Wrapper>
    
}