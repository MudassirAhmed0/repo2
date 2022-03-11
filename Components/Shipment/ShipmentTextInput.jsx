 

import infoIcon from '../../assets/images/svg/info.svg'
import Image from 'next/image'

const ShipmentTextInput = ({label,info,fontMedium}) => {
  return (
    <div className='h-11 grow flex  items-start relative'>
    <input placeholder={label} className={`text-darkGrey pb-5 placeholder-darkGrey border-b  border-grey50Opa h-full w-full flex justify-between items-start ${fontMedium && 'medium-font'}`}/>  
  {info&&  <span className='absolute top-0 right-2'>
        <Image src={infoIcon} alt='Info'/>
    </span>}
</div> 
  )
}

export default ShipmentTextInput