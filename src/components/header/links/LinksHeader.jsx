import styles from './LinksHeader.module.scss'

function LinksHeader({windowWidth}) {

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