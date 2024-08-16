import Form from "../UI/form/Form.jsx"
import Logo from "../UI/logo/Logo.jsx"
import styles from "./Footer.module.scss"

function Footer({windowWidth}) {
    return(
        <footer>
            <div className="container">
                <Logo />
                <p>
                    Adventure Await: Your ultimate <br/> Backpack destination
                </p>
                <div className={styles.contact}>
                    <div className={styles.email}>
                        <Form 
                            placeHolder={'Enter your email address'}
                            inputColor={'#fff'}
                            buttonValue={'Join us'}
                        />
                        <p>
                            Sign up for our newsletter and get 10% of your first order
                        </p>
                    </div>
                    { windowWidth > 1300 && (
                    <div className={styles.contactLinks}>
                        <p>Follow us</p>
                        <a href="/">Facebook</a>
                        <a href="/">Instagram</a>
                        <a href="/">Youtube</a>
                    </div>
                    )}
                </div>
                {windowWidth < 1300 && (
                <div className={styles.contactLinks}>
                    <p>Follow us</p>
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Youtube</a>
                </div>
                )}
            </div>
        </footer>
    )
}

export default Footer