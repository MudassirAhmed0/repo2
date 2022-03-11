import styles from '../../styles/Shipment.module.css';

const Card = ({children}) => {
  return (
    <div className={styles.shipmentCard}>
        {children}
    </div>
  )
}

export default Card