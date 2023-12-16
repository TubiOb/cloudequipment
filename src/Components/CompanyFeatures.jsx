import React from 'react'
import House from '../assets/house 1 (Traced).svg'
import Money from '../assets/money 1 (Traced).svg'
import Email from '../assets/Featured Icons.svg'
import Doc from '../assets/Dr 1.png'
import '../index.css'

const CompanyFeatures = () => {
  return (
    <div className='flex h-full mb-64 items-center mt-32 md:mt-[550px] lg:mt-[750px] w-full'>
        <div className='flex flex-col items-center justify-center w-[80%] mx-auto relative gap-20'>
            <div className='flex-col items-center text-center justify-between gap-3 lg:w-[60%] flex'>
                <div className='text-[#54D4BD] bg-[#EEFFFC] rounded-lg items-center justify-center py-1 px-2'>
                    <h5 className='inter text-xs'>CE Support</h5>
                </div>
                <h4 className='play font-semibold leading-8 text-base md:text-xl lg:text-2xl lg:w-[70%] xl:text-3xl 2xl:text-4xl'>We're on a Mission to Change View of Medical Equipment Finanzing.</h4>
                <p className='manrope text-xs lg:text-sm xl:text-base 2xl:text-lg'>Our services are designed to cater to your specific needs and goals</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start justify-between w-[90%] mx-auto gap-6'>
                <div className='grid grid-cols-1 items-start justify-between mx-auto w-[90%] md:w-[70%] lg:w-[55%] xl:w-full gap-8 py-3'>
                    <div className='flex-col items-start justify-between flex gap-1'>
                        <img src={House} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Medical equipment usage optimisation</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>Cloud Equipment will send patients to your medical facility to make sure their care journey is not interrupted. 
                        As a partner provider, we connect you to the patients who require the equipment you have. Patients can book an appointment over our platform and receive all results directly.</p>
                    </div>

                    <div className='flex-col items-start justify-between flex gap-1'>
                        <img src={Money} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Medical equipment management services </h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>As a healthcare provider, you shouldn’t have to worry about uptime on your medical and diagnostic equipment. With our Maintenance & Operations package, you get full maintenance of your equipment, with guaranteed uptime.</p>
                    </div>

                    <div className='flex-col items-start justify-between flex gap-1'>
                        <img src={Email} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Sale and leaseback transactions</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>Monetize your medical devices and free up capital for your operations while leasing back the devices and enjoying our superior service offering. Really enjoy the best of both worlds!</p>
                    </div>
                </div>

                <div className='flex-shrink-0 w-full lg:pt-20 '>
                    <img src={Doc} alt="" className='object-cover w-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyFeatures