import styles from '../styles/product.module.css'
import Image from 'next/image'
import initialState from '../reducer'
import { useStateValue } from '../StateProvider'

export default function Product ({ id, title, image, price, rating }) {
    const [{ basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch item to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

    return (
        <div className={styles.product}>
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
                            <p key={i}>⭐️</p>
                        ))}
                </div>
            </div>
        </div>
        <img src={image} alt="a product image"></img>
        <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}