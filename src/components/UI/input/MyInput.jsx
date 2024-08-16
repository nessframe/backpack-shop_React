import styles from './MyInput.module.scss'

function MyInput({placeHolder, inputColor}) {
    return(
        <input
            placeholder={placeHolder} 
            className={styles.input} 
            style={{background: `${inputColor}`}}
        />
    )
}

export default MyInput