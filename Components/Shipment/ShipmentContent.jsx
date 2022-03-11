
import CardContent from './CardContent'
import CheckOut from './Checkout'
import ReceiverDetails from './ReceiverDetails'
import SenderDetails from './SenderDetails'
import ShipmentDetails from './ShipmentDetails'

const ShipmentContent = ({shipmentStep,setShipmentStep}) => {
     
        switch (shipmentStep) {
            case 1:
                return   (
                     <CardContent>
                         <ShipmentDetails step={shipmentStep} setStep={setShipmentStep}/>
                     </CardContent>
                        )
            case 2:
                return   (
                        <CardContent>
                            <SenderDetails step={shipmentStep} setStep={setShipmentStep}/>
                        </CardContent>
                        )
            case 3:
                return   (
                        <CardContent>
                            <ReceiverDetails step={shipmentStep} setStep={setShipmentStep}/>
                        </CardContent>
                        )
            case 4:
                return   (
                        <CardContent>
                            <CheckOut step={shipmentStep} setStep={setShipmentStep}/>
                        </CardContent>
                        )
        } 
   
}

export default ShipmentContent