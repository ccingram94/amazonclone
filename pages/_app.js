import '../styles/globals.css'
import Header from '../components/Header'
import StateProvider from '../StateProvider'
import reducer, { initialState } from '../reducer'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
