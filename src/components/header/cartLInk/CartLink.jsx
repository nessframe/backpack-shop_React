import CartSvg from '../../../assets/CartSvg'
import styles from './CartLink.module.scss'

function CartLink({windowWidth}) {
    return(
        <div href='/' className={styles.cartLink}>
            <CartSvg />
            {windowWidth > 600 &&  (
                <span>cart</span>
            )}
        </div>
    )
}

export default CartLink