import styles from '../styles/checkoutproduct.module.css'
import { useStateValue } from '../StateProvider'


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className={styles.checkoutproduct}>
            <img className={styles.checkoutproductimage} src={image} />

            <div className={styles.checkoutproductinfo}>
                <p className={styles.checkoutproducttitle}>{title}</p>
                <p className={styles.checkoutproductprice}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.checkoutproductrating}>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct