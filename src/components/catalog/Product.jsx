import styles from "./Product.module.scss"

function Product({title, body, cost, currency, img}) {
    return(
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={`/productsImg/${img}`}alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>{cost}<span>{currency}</span></p>
        </div>
    )
}

export default Product