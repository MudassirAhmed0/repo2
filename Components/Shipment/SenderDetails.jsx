import MobileVerification from '../Popups/MobileVerification'
import ShipmentDropDown from './ShipmentDropDown'
import ShipmentTextInput from './ShipmentTextInput'

const SenderDetails = ({step,setStep}) => {
    const verify =()=>{
   
    const modal = document.getElementById('mobileVerification')
       modal.classList.remove('opacity-0')
       modal.classList.add('opacity-1')
       modal.classList.remove('pointer-events-none')
       modal.classList.add('pointer-events-auto')
    }
    const nextStep=()=>{
        setStep(step +1)
    }
    const  previousStep =()=>{
        setStep(step -1)
    }
  return (
    <>
    <h5 className='text-xl text-grey medium-font'>
            Please enter your information
        </h5>
        <div className="flex flex-wrap gap-y-14 justify-between mt-6">
        <div className="w-46-per   gap-x-5 flex">
            <ShipmentTextInput label={'First Name'}/>
           
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentTextInput label={'Last Name'}/>
            
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentTextInput label={'Mobile Number'}/>
             
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentDropDown label={'City'}/> 
        </div> 
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput label={'Address Line 1'}/>
        </div>
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput label={'Address Line 2'} />
        </div> 
        <div className="flex justify-between w-full">
            <button onClick={previousStep} className='w-48 h-10 rounded pt-1 border border-yellow'>
                Go Back
            </button>
            <button onClick={verify} className='w-48 h-10 rounded pt-1 bg-yellow'>
                Proceed Next
            </button>
        </div>
            </div>
            <MobileVerification nextStep={nextStep}/>
            </>
  )
}

export default SenderDetails