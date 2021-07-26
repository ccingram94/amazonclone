import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import styles from '../styles/login.module.css'
import Header from '../components/Header'
import Prime from '../components/Prime'
import Product from '../components/Product'
import logo from '../public/amazontransparent.png'
import { auth } from '../firebase'

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                router.push("/")
            })
            .catch(error => alert(error.message))
        //firebase login here
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    router.push("/")
                }
            })
            .catch(error => alert(error.message))
        //firebase registration here
    }

  return (
    <div className={styles.login}>
        <Link href="/" className={styles.loginlogo}>
            <Image src={ logo } alt="the amazon logo"></Image>
        </Link>
        <div className={logincontainer}>
            <h1> Sign-In </h1>
            <form>
                <h5>E-Mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button className={styles.signinbutton} onclick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE conditions of use and sale.  Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Policy Notice.
            </p>
            <button className={styles.registerbutton} onClick={register}>Create your Amazon Account</button>
        </div>
      </div>
  )
}
