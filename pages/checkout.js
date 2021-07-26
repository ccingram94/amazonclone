import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/checkout.module.css'
import Header from '../components/Header'
import Prime from '../components/Prime'
import Product from '../components/Product'
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../StateProvider'
import checkoutad from '../public/checkoutad.jpg'

export default function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

  return (
      <div>
      <Head>
        <title>Amazon Checkout</title>
        <meta name="description" content="amazon checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
          <div className={styles.checkout}>
              <Image src={checkoutad} alt="an advertisement for Amazon credit"></Image>
              <div className={styles.checkoutleft}>
                  <div>
                      <h3>Hello, {user?.email}</h3>
                      <h2 className={styles.checkouttitle}>Your Shopping Basket</h2>
                      {basket.map(item => (
                          <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                      ))}
                  </div>
              </div>
              <div className={styles.checkoutright}>
                  <h2>The subtotal will be: </h2>
                  <Subtotal></Subtotal>
              </div>

          </div>
      </main>
      </div>
  );
}
