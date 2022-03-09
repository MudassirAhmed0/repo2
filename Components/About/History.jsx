import React from 'react'
import Heading from '../Heading' 
import box from '../../assets/images/svg/box.jpg'
import brandIcon from '../../assets/images/about-zajil-exprece/image/history-brand.svg' 
import Image from 'next/image'
import styles from '../../styles/About.module.css' 

const History = () => {
  return (
    <section className=" flex flex-col relative items-center  pb-28">
        <span className={styles.kamalDekho}>

        </span>
        <span className={styles.historyYellowTop}>

        </span>
        <span className='absolute top-0 left-0'>
            <Image src={brandIcon} alt='brandIcon'/>
        </span>
            <Heading
                heading='History'
                para={['Founded in 1999, Zajil has grown through professional management, expansive','capital investment, and corporate acquisitions.']}
            />
            <div className={`mt-14 relative w-69 ${styles.historyItems}`}>
                <div className={`w-1/2 flex flex-col pl-10 pb-6 relative ${styles.firstHistoryItem}`}>
                    <span className="text-blue bold-font relative pb-2 mb-4   border-b border-yellow text-4xl">
                        1999    
                        <span className={`z-10 ${styles.rightBox}`}>
                            <Image src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font text-grey ">
                    Zajil begins as a store-to-store express company with 2 locations in KSA. New locations are continually added.
                    </span>
                </div>
                <div className='w-1/2 flex flex-col  ml-auto pr-6'>
                    <span className="text-blue bold-font pl-6  relative pb-2 mb-4  border-b border-yellow text-4xl ">
                        2015    
                        <span className={styles.leftBox}>
                            <Image src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font  pl-6 text-grey pb-4">
                    Now with more than 10 locations, Zajil becomes the first privately-owned company to be licensed for postal delivery service in KSA. Acquires Hat International (HATEX) and expands into line hauling and heavy shipping, and other B2B services.
                     </span>
                     <ul className=' flex flex-col gap-y-2 pl-4'>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Line Haul / Fleet Shipping
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Heavy Shipping
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         B2B Delivery 
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Cold delivery (temperature controlled)
                         </li>
                     </ul>
                     
                </div>
                <div className='w-1/2 flex flex-col pl-10 pb-6'>
                    <span className="text-blue bold-font relative pb-2 mb-4   border-b border-yellow text-4xl">
                    2018    
                        <span className={styles.rightBox}>
                            <Image src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font text-grey ">
                    Now with more than 100 locations, new milestones of 115k shipments per month with fleet of 126 and 80 destinations. <br /> New capabilities added: </span>
                    <ul className=' flex flex-col gap-y-2 mt-3'>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Last-mile Delivery (LMD) for B2C customers
                         </li>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Door-to-door service (from warehouse to residential)
                         </li> 
                     </ul>
                </div>
                <div className='w-1/2 flex flex-col  ml-auto pr-6'>
                    <span className="text-blue bold-font pl-6  relative pb-2 mb-4  border-b border-yellow text-4xl ">
                    2020    
                        <span className={styles.leftBox}>
                            <Image src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font  pl-6 text-grey pb-4">
                    Zajil delivers 416k shipments per month on average to 279 destinations.
                     </span>
                     <ul className=' flex flex-col gap-y-2 pl-4'>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Fulfillment operation (optimized for E-commerce customers)
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Expanded to China, UAE, Bahrain, Kuwait, USA.
                         </li>
                         
                     </ul>
                     
                </div>
                <div className={`w-1/2 flex flex-col pl-10 pb-6 z-10 relative ${styles.lastHistoryItem}`}>
                    <span className="text-blue bold-font relative pb-2 mb-4   border-b border-yellow text-4xl">
                    2021    
                        <span className={styles.rightBox}>
                            <Image src={box} alt='box'/>
                        </span>
                    </span>
                    <span className={`medium-font text-grey `}>
                    Rapid expansion continues despite Covid-19 pandemic. 20k deliveries per day (600k+/mo), for more than 7M customers.  <br /> New shipping and logistics services added: 
                     </span>
                    <ul className=' flex flex-col gap-y-2 mt-3'>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Fulfillment
                         </li>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Freight Forwarding (Air)
                         </li> 
                     </ul>
                </div>
            </div>
    </section>
  )
}

export default History