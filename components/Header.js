import styles from '../styles/header.module.css'
import headerlogo from '../public/amazontransparent.png'
import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import reducer, { initialState } from '../reducer'
import { auth } from '../firebase'

export default function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

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
                <Link href={!user && '/login'}>
                    <div onClick={handleAuthentication} className={styles.headeroption}>
                        <span className={styles.headeroptionlineone}>Hello {!user ? 'Guest' : user.email}</span>
                        <span className={styles.headeroptionlinetwo}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link href="orders">
                    <div className={styles.headeroption}>
                        <span className={styles.headeroptionlineone}>Returns</span>
                        <span className={styles.headeroptionlinetwo}>Orders</span>
                    </div>
                </Link>

                <div className={styles.headeroption}>
                    <span className={styles.headeroptionone}>Hello Guest</span>
                    <span className={styles.headeroptiontwo}>Sign In</span>
                </div>
                <div className={styles.headeroption}>
                    <span className={styles.headeroptionone}>Returns</span>
                    <span className={styles.headeroptiontwo}>Orders</span>
                </div>
                <div className={styles.headeroption}>
                    <span className={styles.headeroptionlineone}>Your</span>
                    <span className={styles.headeroptionlinetwo}>Prime</span>
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