import Logo from '../UI/logo/Logo.jsx';
import CartLink from './cartLInk/CartLink.jsx';
import styles from './Header.module.scss'
import LinksHeader from './links/LinksHeader.jsx';

function Header({windowWidth}) {

    return(
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerContent}>
                    <Logo />

                    <LinksHeader 
                        windowWidth={windowWidth}
                    />

                    <CartLink 
                        windowWidth={windowWidth}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;