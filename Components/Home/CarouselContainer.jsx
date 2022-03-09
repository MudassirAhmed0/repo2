import styles from '../../styles/Home.module.css'
import HomeCarousel from "./Carousel"
import Image from 'next/image'
import yellowBox from '../../assets/images/svg/box-yellow.svg' 
import Link from 'next/link'
import overlays from '../../styles/Overlays.module.css'
import brandIcon from '../../assets/images/home/images/brandIcon3.svg'

const CarouselContainer = () => {
  return (
    <div className={`flex flex-col items-center rounded-b-xl pt-24 ${styles.carouselContainer}`}>
         <Image src={yellowBox}/>
            <h4 className={`text-3xl relative w-full text-center  text-blue uppercase medium-font mb-10 mt-2 ${Overlays.carouselOverlay2} `} >
                <span className={styles.brandIcon3}>
                    <Image src={brandIcon} alt='brandIcon'/>    
                </span>
             <span className={` ${Overlays.carouselOverlay}`}></span>
                Latest News
            </h4>
        <HomeCarousel/>    
        <Link href='#' >
            <a  className='w-36 h-10  mb-12 mt-10  rounded-md border-2 border-yellow medium-font text-grey  hover:shadow-md  hover:shadow-shadaw flex justify-center items-center hover:bg-yellow'>
                    Learn More

            </a>
        </Link>
    </div>
  )
}

export default CarouselContainer