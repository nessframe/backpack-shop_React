import CartLink from './cartLInk/CartLink.jsx';
import styles from './Header.module.scss'
import LinksHeader from './links/LinksHeader.jsx';
import LogoHeader from './logo/LogoHeader.jsx';

function Header() {


    return(
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerContent}>
                    <LogoHeader />

                    <LinksHeader />

                    <CartLink />
                </div>
            </div>
        </header>
    )
}

export default Header;