import styles from "./Product.module.scss"

function Product({title, body, cost, currency, img}) {
    return(
        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src={`/productsImg/${img}`}alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
            <cost>{cost}<span>{currency}</span></cost>
        </div>
    )
}

export default Product