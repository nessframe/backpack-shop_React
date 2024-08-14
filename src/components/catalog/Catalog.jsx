import Product from "./Product"
import styles from "./Catalog.module.scss"

function Catalog({products}) {
    return(
        <div className={styles.catalog}>
            <div className="container">
                <div className={styles.catalogContent}>
                    {products.map((product) => 
                        <Product 
                            title={product.title}
                            body={product.body}
                            cost={product.cost}
                            currency={product.currency}
                            img={product.img}
                            key={product.id}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Catalog