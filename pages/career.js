import Head from 'next/head'
import Blue from '../Components/Blue'
import CareerDetail from '../Components/Career/CareerDetail'
import Hero from '../Components/Career/Hero'
import Layout from '../Components/Layout/Layout'

const Career = () => {
    return (
        <>
            <Head>
                <title>Career || Zajil</title>
                <meta name="description" content="" />
                
            </Head>
            <Layout noShipment={null}> 
                <Hero />
                <Blue home={null} about2={null} boxShadowNone={null}>
                    <CareerDetail />
                </Blue>
            </Layout>
        </>
    )
}

export default Career