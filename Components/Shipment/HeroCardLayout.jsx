
import styles from '../../styles/Shipment.module.css';
import Layout from '../Layout/Layout'

const HeroCardLayout = ({children}) => {
  return (
    <Layout>
    <section className={styles.shipmentHero}>
      <span className={styles.shipmentOverlay}>
      </span>
      <span className={styles.shipmentOverlay2}>
      </span>
      <span className={styles.shipmentBottomOverlay}>
      </span>
        <span className={styles.shipmentHeroImg}>
                {/* <Image src={}/> */}
      </span>
      <div className="pt-24"></div>
      {children}
      </section>
    </Layout>
  )
}

export default HeroCardLayout