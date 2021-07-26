import styles from '../styles/subtotal.module.css'
import CurrencyFormat from 'react-currency-format'

export default function Subtotal() {
    return (
        <div className={styles.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className={styles.subtotalgift}>
                            <input type="checkbox" /> This order contains a gift 
                        </small>
                        <button>Continue to Checkout</button>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}