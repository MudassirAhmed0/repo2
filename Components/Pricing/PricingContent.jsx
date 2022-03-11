import {useRef} from 'react'
import CardContent from '../Shipment/CardContent'
import ShipmentButton from '../Shipment/ShipmentButton'
import ShipmentDropDown from '../Shipment/ShipmentDropDown'

const PricingContent = () => {
    const calculated = useRef()
    const calculate =()=>{
        let item = calculated.current
        item.classList.add('max-h-40')
        item.classList.remove('max-h-0')
    }

  return (
    <CardContent>
        <div className='justify-center flex gap-x-6' >
        
        <button className='w-40 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Domestic
            </button>
        <button className='w-40 h-10 rounded  pt-0.5  medium-font  text-grey border border-yellow'>
                       International
            </button>
        </div>
        <div className="flex flex-wrap gap-y-14 justify-between mt-10">
        <div className="w-46-per   gap-x-16 flex flex-col">
            <span className='medium-font text-grey text-xl mb-3'>
                 From City
            </span>
            <ShipmentDropDown label={'Jeddah'}/> 
        </div>     
        <div className="w-46-per   gap-x-16 flex flex-col">
            <span className='medium-font text-grey text-xl mb-3'>
                 To City
            </span>
            <ShipmentDropDown label={'Riyadh'}/> 
        </div>
        <div className="w-46-per   gap-x-5 flex flex-col gap-y-4">
            <span className='medium-font text-xl text-grey'>What are you planning to Ship?</span>
            <div className='gap-x-5 flex'>
                <ShipmentButton active label='Documents'/>
                <ShipmentButton label='Packages'/>
            </div>
        </div>      
        <div className="w-46-per   gap-x-16 flex items-end">
            <ShipmentDropDown label={'Total Gross Weight'}/>
            <ShipmentDropDown label={'Number of Packs'}/>
        </div> 
        <div className='w-full flex justify-center'>
            <button onClick={calculate}  className='w-48 h-10 rounded  pt-0.5 mt-5   mx-auto medium-font shadow text-grey bg-yellow'>
                            Calculate
                </button>

        </div>
        <div className="max-h-0 w-full transition-all duration-300 overflow-hidden" ref={calculated}>
            <div className="w-full  rounded-lg shadow-lg flex flex-col bg-yellow pt-4 pb-8 px-11">
                <span className='text-grey medium-font'>Your Shipment Rate Results</span>
                <div className='flex items-end'>
                    <div className='flex flex-col mt-4 w-1/5' >
                        <span className='text-grey medium-font'>From</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>Jeddah</span>  
                    </div>
                    <div className='flex flex-col mt-4 w-1/5' >
                        <span className='text-grey medium-font'>To</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>Riyadh</span>  
                    </div>
                    <div className='flex flex-col mt-4 w-1/5' >
                        <span className='text-grey medium-font'>Status</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>Documents</span>  
                    </div>
                    <div className='flex flex-col mt-4 w-1/5' >
                        <span className='text-grey medium-font'>Shipping</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>98.67 SAR</span>  
                    </div>
                    <button className='w-40 h-11 rounded  pt-0.5  medium-font  text-grey bg-white shadow-lg ml-auto'>
                       Create Shipment
            </button>
                </div>
            </div> 
        </div>
        </div>
    </CardContent>
  )
}

export default PricingContent