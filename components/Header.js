import styles from '../styles/header.module.css'
import headerlogo from '../public/amazontransparent.png'
import Image from 'next/image'
import SearchIcon from '@material-ui/icons/Search'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image className={styles.headerlogo} src={headerlogo} height="40px" width="70px"/>
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
            </div>
        </div>
    )
}