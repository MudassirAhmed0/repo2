import CardContent from "../Shipment/CardContent"
import styles from '../../styles/Shipment.module.css'
import info from '../../assets/images/svg/info.svg'
import Image from 'next/image'

const TrackingContent = () => {
  return (
    <CardContent>
    <div className='justify-center flex gap-x-6' >
    
    <button className='w-40 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                    Tracking Number
        </button>
    <button className='w-40 h-10 rounded  pt-0.5  medium-font  text-grey border border-yellow'>
                   Mobile Number
        </button>
    </div>
    <div className="flex flex-col">
        <div className={`flex mt-7 w-8/12 mx-auto`}>
            <div className={`medium-font  text-base ${styles.promocode}`}>
            <input type="text"   placeholder='sds' name='promoCode' id='promoCode'/>
            <label htmlFor="promoCode" className='cursor-pointer'>Tracking Number</label>
            </div> 
            <button className='w-32 bg-white shadow-lg rounded pt-1 text-grey  trackBtn'>
            Track
            </button>
        </div>
        <div className="w-8/12 mx-auto mt-3 gap-x-3 items-center flex cursor-pointer">
            <Image src={info} alt='Info'/>
            <span className="text-grey text-lg light-font pt-1 ">
            Where can I find my tracking number?
            </span>
        </div>
        <span className="mt-40 text-3xl medium-font text-center mb-24 text-bababa">
        Enter Tracking Number above to view results
        </span>
    </div>
    
</CardContent>
  )
}

export default TrackingContent