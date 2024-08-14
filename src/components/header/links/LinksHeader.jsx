import { useState } from 'react';
import styles from './LinksHeader.module.scss'

function LinksHeader() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));


    return(
        <div className={styles.linkHeader}>
            <span>shop</span>
            
            {windowWidth > 900 &&  (
                <>
                    <span>why we?</span>
                    <span>support</span>
                </>
            )}
        </div>
    )   
}

export default LinksHeader