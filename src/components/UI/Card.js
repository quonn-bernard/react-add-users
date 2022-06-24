import styles from './Card.module.css';

export const Card = props => {

    return (
            <article className={styles.card}>
                {props.children}
            </article>
    )
}