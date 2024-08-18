import styles from './MyInput.module.scss'

function MyInput({placeHolder, inputColor, inputQuery, setQuery}) {
    return(
        <input
            value={inputQuery}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeHolder} 
            className={styles.input} 
            style={{background: `${inputColor}`}}
        />
    )
}

export default MyInput