import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
  <html>
  <Head>
      <link rel="icon" href="favicon.ico"/>
      <meta
        name="Lancaster City Nutrition"
        content="LCN website and web application"/>
      <title>LCNutrition</title>
    </Head>
  <Component {...pageProps} />
  </html>
)}

export default MyApp
