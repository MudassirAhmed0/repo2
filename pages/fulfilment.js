import Head from 'next/head'
import Blue from '../Components/Blue'
import DownloadPdf from '../Components/DownloadPdf'
import FullfilDetail from '../Components/Fullfilment/FullfilDetail'
import Hero from '../Components/Fullfilment/Hero'
import Layout from '../Components/Layout/Layout'

const Fulfilment = () => {
    return (
        <>
            <Head>
                <title>Fulfilment || Zajil</title>
                <meta name="description" content="" />
                
            </Head>
            <Layout noShipment={null}>
        <Hero/>
        <Blue home={null} about2={null} boxShadowNone={styles.boxShadowNone}>
                    <FullfilDetail />
                </Blue>
                <DownloadPdf />
            </Layout>
        </>
    )
}

export default Fulfilment