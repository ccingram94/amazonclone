import styles from '../styles/product.module.css'
import Image from 'next/image'

export default function Product ({title, image, price, rating}) {
    return (
        <div className={styles.product}>
            <div className={styles.productinfo}>
                <p>{title}</p>
                <p className={styles.productprice}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.productrating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
            </div>
        </div>
    )
}