import styles from '../../styles/Shipment.module.css'

const CardHeader = ({children}) => {
  return (
    <div className={`flex items-center justify-between ${styles.shipmentHeader}`}>
      {children}
    </div>
  )
}

export default CardHeader