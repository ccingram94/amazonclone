import { StylesProvider } from "@material-ui/core";
import styles from '../styles/prime.module.css'
import Image from 'next/image'
import Product from '../components/Product'
import Banner from '../public/banner1.jpg'
import product1image from '../public/leanstartup.jpeg'

export default function Prime () {
    return (
        <div className={styles.prime}>
            <div className={styles.primecontainer}>
                <Image src={Banner} alt="an advertisement for Amazon Prime" className={styles.homeimage} ></Image>
                <div className={styles.homerow}>
                    <Product title="The Lean Startup" price={29.99} image={product1image} rating={5}></Product>
                    <Product title="Kenmore Mixer" price={59.99} image={product1image} rating={3}></Product>
                </div>
                <h2></h2>
                <div className={styles.homerow}>
                    <Product title="The Lean Startup" price={29.99} image={product1image} rating={5}></Product>
                    <Product title="Kenmore Mixer" price={59.99} image={product1image} rating={3}></Product>
                    <Product title="The Lean Startup" price={29.99} image={product1image} rating={5}></Product>
                    <Product title="Kenmore Mixer" price={59.99} image={product1image} rating={3}></Product>
                </div>
                <div className={styles.homerow}>
                    <Product title="The Lean Startup" price={29.99} image={product1image} rating={5}></Product>
                    <Product title="Kenmore Mixer" price={59.99} image={product1image} rating={3}></Product>
                </div>
            </div>
        </div>
    )
}