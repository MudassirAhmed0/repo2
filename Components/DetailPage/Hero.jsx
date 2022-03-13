import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css' 
import HeroImg from '../../assets/images2/Zajil-Mobile-Application/banner/app-banner.png'
import styles from '../../styles/Chalja.module.css';

const Hero = () => {
    return (
        <section className={styles.shipmentHero} >
            <span className='absolute top-0 left-0 w-full h-full img_container'>
                <Image src={HeroImg} />
            </span>
            <span className={`absolute  ${overlays.theappOverlay}`}></span>
            <span className={`absolute  ${overlays.secondAppOverlay}`}></span> 
            <span className="bottomOverlay"></span>
        </section>
    )
}

export default Hero