import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/payment.module.css'
import Header from '../components/Header'
import Prime from '../components/Prime'
import Product from '../components/Product'
import logo from '../public/amazontransparent.png'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'

export default function Payment() {
  return (
    <div className={styles.payment}>
        <div className={styles.paymentcontainer}>
            <div className={styles.paymentsection}>
                <div className={styles.paymenttitle}>
                    <h3>Delivery Address</h3>
                </div>
                <div className={styles.paymentaddress}>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className={styles.paymentsection}>
                <div className={styles.paymenttitle}>
                    <h3>Review items and delivery: </h3>
                </div>
                <div className={styles.paymentitems}>
                    {getBasketTotal.map(item => (
                        <CheckoutProduct></CheckoutProduct>
                    ))}
                </div>
            </div>
            <div className={styles.paymentsection}>

            </div>
        </div>
    </div>
  )
}
