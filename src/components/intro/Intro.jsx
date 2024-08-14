import styles from './Intro.module.scss'

function Intro() {
    return(
        <div className={styles.intro}>
            <div className="container">
                <h1>Get Inspired</h1>
                <p>
                    Browsing for your next long-haul trip, everyday journey, or just fancy a look at what's new? <br /> From   community favourites to about-to-sell-out items, see them all here.
                </p>
            </div>
        </div>
    )
}

export default Intro