import CartSvg from '../../../assets/CartSvg'
import styles from './CartLink.module.scss'

function CartLink({windowWidth}) {
    return(
        <a href='/' className={styles.cartLink}>
            <CartSvg />
            {windowWidth > 600 &&  (
                <span>cart</span>
            )}
        </a>
    )
}

export default CartLink