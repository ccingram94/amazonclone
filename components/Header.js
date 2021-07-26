import styles from '../styles/header.module.css'
import headerlogo from '../public/amazontransparent.png'
import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'

export default function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className={styles.header}>
            <Link href="/">
                <Image className={styles.headerlogo} src={headerlogo} height="40px" width="70px"/>
            </Link>
            <div className={styles.headersearch} type="text">
                <input className={styles.headersearchinput} type="text"></input>
                <SearchIcon className={styles.headersearchicon}></SearchIcon>
            </div>
            <div className={styles.headernav}>
                <div className={styles.headeroption}>
                    <span className={styles.headeroptionone}>Hello Guest</span>
                    <span className={styles.headeroptiontwo}>Sign In</span>
                </div>
                <div className={styles.headeroption}>
                    <span className={styles.headeroptionone}>Returns</span>
                    <span className={styles.headeroptiontwo}>Orders</span>
                </div>
                <div className={styles.headeroptionbasket}>
                    <Link href="/checkout">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Link>
                    <span className={styles.headeroptiontwo} className={styles.headerbasketcount}>{basket?.length}</span>
                </div>
            </div>
        </div>
    )
}