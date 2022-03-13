import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css' 
import HeroImg from '../../assets/images2/Zajil-Mobile-Application/banner/app-banner.png'
import styles from '../../styles2/media.module.css'

const Hero = () => {
    return (
        <section className={styles.heroSection} >
            <span className='absolute w-full h-full top-0 left-0 img_container'>
                <Image src={HeroImg} />
            </span> 
            <span className={`absolute  ${overlays.theappOverlay}`}></span>
            <span className={`absolute  ${overlays.secondAppOverlay}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white uppercase">
                <h1 className='text-4xl medium-font mb-2'>
                    PRIVACY POLICY
                </h1>
            </div>
        </section>
    )
}

export default Hero