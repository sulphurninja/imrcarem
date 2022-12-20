import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ScrollObserver from '../utils/scrollObserver'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url:any) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url:any) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},500);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (<div className='spinner-wrapper'>
    <div className="spinner"></div></div>)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>

    <><Loading/><Component {...pageProps} /></>

    </Provider>
  )
}
