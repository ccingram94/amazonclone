import '../styles/globals.css'
import Header from '../components/Header'
import {StateProvider} from '../StateProvider'
import reducer, { initialState } from '../reducer'
import { useEffect } from 'react'
import { auth } from '../firebase'
import { useStateValue } from '../StateProvider'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // will only run once when the app component loads...


  const [{}, dispatch] = useStateValue();
  
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <StateProvider initialState={ initialState } reducer={ reducer }>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
