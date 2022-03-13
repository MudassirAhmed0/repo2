import Image from 'next/image'
import Link from 'next/link'
import home from '../../styles2/Home.module.css'
import arrow from '../../assets/images2/svg/right-arrow.svg'
import styles from '../../styles2/media.module.css'
import YellowBox from '../../assets/images2/svg/box-yellow.svg'
import chacha from '../../assets/images2/media-center/images/chacha.jpg'
import arrow2 from '../../assets/images2/svg/arrow-black.svg'
import commitment2business from '../../assets/images2/home/images/commitment-to-business.jpg'
import AnnounceMajorInvestment from '../../assets/images2/home/images/announce-major-investmeny.jpg'
import commitmenttobusiness from '../../assets/images2/home/images/commitment to business.jpg'
import globalCapacity from '../../assets/images2/home/images/global-capacity.jpg'


const MediaDetail = () => {
    return (
        <div className='pt-16 px-20 pb-24'>
            <div>
                <span>
                    <Image src={YellowBox} alt="Yellow Box" />
                </span>
                <h2 className='text-blue medium-font text-3xl'>Featured News</h2>
            </div>
            <div className='flex gap-x-10 items-center mt-3'>
                <div className={styles.imgw}>
                    <span className={styles.chachaStyles}>
                        <Image src={chacha} alt="Side Chacha" />
                    </span>
                </div>
                <div className={styles.contentew}>
                    <p className='text-xs text-grey medium-font'>8 June 2020</p>
                    <p className='text-base text-grey light-font mt-2'>eport of the classification index of postal and logistics companies issued by CITC which monitors the number of raised complaints in the second quarter of 2020 , Zajil Company comes as the best company in the international shipments sector.</p>
                    <p className='text-base text-grey light-font mt-4'>Zajil CARE, a commitment to business values that highlight KSA competitive…</p>
                    <div className='flex items-center cursor-pointer  mt-4'>
                        <p className='text-base text-grey pt-1.5 pr-2'>Read More</p>
                        <span className="mt-1.5">
                            <Image src={arrow} />
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <span>
                    <Image src={YellowBox} alt="Yellow Box" />
                </span>
                <h2 className='text-blue medium-font text-3xl'>Latest Updates</h2>
            </div>
            <div className='flex gap-x-8 mt-4'>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={commitment2business} alt='Image' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow}  ml-1`}>
                                    <Image src={arrow2} />

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={AnnounceMajorInvestment} alt='Image' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow}  ml-1`}>
                                    <Image src={arrow2} />

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={commitmenttobusiness} alt='Image' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow}  ml-1`}>
                                    <Image src={arrow2} />

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={globalCapacity} alt='Image' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow}  ml-1`}>
                                    <Image src={arrow2} />

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaDetail