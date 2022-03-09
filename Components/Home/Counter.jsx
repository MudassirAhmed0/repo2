import styles from '../../styles/Home.module.css'
import overlay from '../../styles/Overlays.module.css'
import Image from 'next/image'
import cube from '../../assets/images/svg/box-white.svg'

const Counter = () => {
  return ( 
    <section className={`  relative  ${styles.videoSection}  mt-24`}>
        <span className={`bg-cardTopYellow ${styles.yellowTop}`}></span>
        <span className={`bg-cardTopYellow ${styles.yellowBottom}`}></span>
      <div className={`relative  flex justify-between flex-col pt-16 pb-16 ${styles.videoContinaer}`}>
        <span className={overlay.videoTopOverlay}></span>
        <span className={overlay.videoTopOverlay2}></span>
        <span className={overlay.videoBottomOverlay}></span>
        <div className="flex justify-center relative gap-y-3 flex-col items-center">
          <Image  src={cube} alt='cube'/> 
          <h4 className="text-3xl text-yellow medium-font">
            YES DELIVERED  
          </h4> 
        </div>
        <div className={`flex justify-between text-white relative ${styles.counter}` }>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
              7M+
            </span>
            <span className="text-offWhite">
              Active Clients
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
              396
            </span>
            <span className="text-offWhite">
            Courier Vans
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
              500+
            </span>
            <span className="text-offWhite">
            Corporate Clients
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
              1055
            </span>
            <span className="text-offWhite">
            Employees
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
              117
            </span>
            <span className="text-offWhite">
            KSA Branches
            </span>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter