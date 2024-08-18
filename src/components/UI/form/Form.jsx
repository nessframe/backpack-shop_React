import Button from '../button/Button'
import MyInput from '../input/MyInput'
import styles from './Form.module.scss'

function Form({placeHolder, inputColor, buttonValue, inputQuery, setQuery}) {

    return(
        <form className={styles.form}>
            <MyInput 
                inputQuery={inputQuery}
                setQuery={setQuery}
                placeHolder={placeHolder}
                inputColor={inputColor}
            />
            <Button>{buttonValue}</Button>
            <div />
        </form>
    )
}
export default Form