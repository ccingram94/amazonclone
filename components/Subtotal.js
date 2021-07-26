import styles from '../styles/subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'

export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className={styles.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>0</strong>
                        </p>
                        <small className={styles.subtotalgift}>
                            <input type="checkbox" /> This order contains a gift 
                        </small>
                        <button>Continue to Checkout</button>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}