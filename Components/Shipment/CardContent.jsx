 
import styles from '../../styles/Shipment.module.css'
const CardContent = ({children}) => {
  return (
    <div className={`pt-6 pb-10 ${styles.shipmentContent}`}>
        {children}
    </div>
  )
}

export default CardContent