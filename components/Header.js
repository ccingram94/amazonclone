import styles from '../styles/header.module.css'
import headerlogo from '../public/amazonblue.jpeg'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="header">
            <Image className="headerlogo" src={headerlogo} height="50px" width="100px"/>
            <div className="headersearch" type="text" />
                <input className="headersearchinput" type="text" />
            </div>
            )
}