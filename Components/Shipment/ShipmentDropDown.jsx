 

import arrow from '../../assets/images/svg/arrow-fill.svg'
import Image from 'next/image'

const ShipmentDropDown = ({label}) => {
  return (
    <div className='h-11 grow flex items-center cursor-pointer'>
                <span className='text-darkGrey border-b  border-grey50Opa h-full w-full flex justify-between'>
                    {label}
                    <spam className='mr-2'>
                        <Image src={arrow}/>

                    </spam>
                </span>    
            </div>
  )
}

export default ShipmentDropDown