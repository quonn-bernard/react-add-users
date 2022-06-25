import styles from './Modal.module.css';
import { Button } from './Button';

export const Modal = props => {

    if(!props.show) {
        return null;
    }

    return <div className={styles['modal-panel']}>
                <div id="#ok">
                    <header className={styles['modal-panel__header']}>{props.title}</header>
                    <h2>{props.message}</h2>
                    <Button onClick={props.onModalDissmisal}>CLOSE</Button>
                </div>
            </div>
}