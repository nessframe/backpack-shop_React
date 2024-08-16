import Button from '../button/Button'
import MyInput from '../input/MyInput'
import styles from './Form.module.scss'

function Form({placeHolder, inputColor, buttonValue}) {

    return(
        <form className={styles.form}>
            <MyInput 
                placeHolder={placeHolder}
                inputColor={inputColor}
            />
            <Button>{buttonValue}</Button>
            <div />
        </form>
    )
}
export default Form