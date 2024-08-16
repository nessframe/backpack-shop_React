import LogoSvg from "../../assets/LogoSvg.jsx"
import styles from "./Footer.module.scss"

function Footer({windowWidth}) {
    return(
        <footer>
            <div className="container">
                <div className={styles.logo}>
                    <LogoSvg /> <span>pack</span>
                </div>
                <p>
                    Adventure Await: Your ultimate <br/> Backpack destination
                </p>
                <div className={styles.contact}>
                    <div className={styles.email}>
                        <div className={styles.emailInput}>
                            <input
                                placeholder="Enter your email"
                            />
                            <button>Join us</button>
                            <div></div>
                        </div>
                        <p>
                            Sign up for our newsletter and get 10% of your first order
                        </p>
                    </div>
                    { windowWidth > 1100 && (
                    <div className={styles.contactLinks}>
                        <p>Follow us</p>
                        <a href="/">Facebook</a>
                        <a href="/">Instagram</a>
                        <a href="/">Youtube</a>
                    </div>
                    )}
                </div>
                {windowWidth < 1100 && (
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