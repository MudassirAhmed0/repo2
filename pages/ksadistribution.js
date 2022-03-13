import Head from 'next/head'
import Blue from '../Components/Blue'
import DownloadPdf from '../Components/DownloadPdf'
import Hero from '../Components/Ksa/Hero'
import KsaDetail from '../Components/Ksa/KsaDetail'
import Layout from '../Components/Layout/Layout'


const KSADistribution = () => {
    return (
        <>
            <Head>
                <title>KSA Distribution || Zajil</title>
                <meta name="description" content="" />
                
            </Head>
            <Layout noShipment={null}>
        <Hero/>
        <Blue home={null} about2={null} boxShadowNone={styles.boxShadowNone}>
                    <KsaDetail />
                </Blue>
                <DownloadPdf />
            </Layout>
        </>
    )
}

export default KSADistribution