import styles from './User.module.css'

export const User = props => {

    const ageText = 'years old'
    return  <li className={styles.user}>
                <div>{props.name}</div>
                <div>({props.age} {ageText})</div>
            </li>
} 