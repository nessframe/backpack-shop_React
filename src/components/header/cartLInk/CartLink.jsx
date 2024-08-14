import CartSvg from '../../../assets/CartSvg'
import styles from './CartLink.module.scss'

function CartLink() {
    return(
        <div className={styles.cartLink}>
            <CartSvg />
            cart
        </div>
    )
}

export default CartLink