import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Prime from '../components/Prime'
import Product from '../components/Product'
import logo from '../public/amazontransparent.png'

export default function Login() {
  return (
    <div className={styles.container}>
        <Image src={logo} alt="amazon logo"></Image>
        <Login></Login>
    </div>
  )
}
