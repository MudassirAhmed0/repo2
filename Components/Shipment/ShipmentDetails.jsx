import ShipmentButton from './ShipmentButton'
import ShipmentDropDown from './ShipmentDropDown'
import ShipmentTextInput from './ShipmentTextInput'

const ShipmentDetails = ({step,setStep}) => {
  const nextStep =()=>{
    setStep(step +1)
  }
  return (
    <>
    <h5 className='text-xl text-grey medium-font'>
            What are you planning to Ship?
        </h5>
        <div className="flex flex-wrap gap-y-14 justify-between mt-6">
        <div className="w-46-per   gap-x-5 flex">
           <ShipmentButton active label='Documents'/>
           <ShipmentButton label='Packages'/>
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentDropDown label={'Total Gross Weight'}/>
            <ShipmentDropDown label={'Number of Packs'}/>
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentDropDown label={'Pickup date'}/> 
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentDropDown label={'Pickup time'}/> 
        </div> 
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput label={'Declared Goods Value'} info/>
        </div>
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput label={'Name of item'} />
        </div>
        <div className="w-full gap-x-16 flex"> 
            <ShipmentTextInput label={'Description'} />
        </div>
        <div className="flex justify-end w-full">
            <button onClick={nextStep} className='w-48 h-10 rounded pt-1 bg-yellow'>
                Proceed Next
            </button>
        </div>
            </div>
            </>
  )
}

export default ShipmentDetails