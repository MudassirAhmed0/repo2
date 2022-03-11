import Card from './Card'
import ShipmentContent from './ShipmentContent'
import ShipmentHeader from './ShipmentHeader'

const ShipmentCard = ({step,setStep}) => {
  return (
    <Card>
      <ShipmentHeader shipmentStep={step}/>
      <ShipmentContent shipmentStep={step} setShipmentStep={setStep}/>
  </Card>
  )
}

export default ShipmentCard