import '../styles/globals.css' 
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
          <Head>
          <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content />
        <meta property="og:description" content />
        <meta property="og:url" content />
        <meta property="og:site_name" content />
        <meta property="og:image" content />
        <meta name="twitter:card" content />
        <meta name="twitter:site" content />
        <meta name="twitter:creator" content />
        <meta name="twitter:title" content />
        <meta name="twitter:description" content />
        <meta name="twitter:domain" content />
        <meta name="twitter:image" content />
        <meta name="twitter:url" content />
        <meta itemProp="image" content />
        <meta itemProp="name" content />
        <meta itemProp="description" content />
        <meta name="geo.region" content />
        <meta name="geo.placename" content />
        <meta name="geo.position" content />
        <meta name="ICBM" content />
        <meta name content />
        <meta name="theme-color" content="#AB9969" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <link rel="alternate icon" type="image/png" href="" />
        <link rel="alternate icon" type="image/svg+xml" href="" />
        <link rel="manifest" href="" />
        {/* <link rel="icon" href="/favicon.png" /> */}
          </Head>
          <Component {...pageProps} />
        </> 
 
}

export default MyApp
