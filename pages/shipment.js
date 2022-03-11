import ShipmentCard from '../Components/Shipment/ShipmentCard' 
import { useState } from 'react' 
import HeroCardLayout from '../Components/Shipment/HeroCardLayout'
import Head from 'next/head'

const shipment = () => {
  const [shipmentStep,setShipmentStep] = useState(1)
  return (
    <>
       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head> 
  <HeroCardLayout>
     <ShipmentCard step={shipmentStep} setStep={setShipmentStep}/>
  </HeroCardLayout>
 
    </>
  )
}

export default  shipment