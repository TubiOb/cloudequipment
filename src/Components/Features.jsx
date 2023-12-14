import React from 'react'
import House from '../assets/house 1 (Traced).svg'
import Money from '../assets/money 1 (Traced).svg'
import Email from '../assets/Featured Icons.svg'
import Rectangle1 from '../assets/Rectangle 145.svg'
import Rectangle2 from '../assets/Rectangle 147.svg'
import Rectangle3 from '../assets/Rectangle 148.svg'
import Rectangle4 from '../assets/Rectangle 146.svg'

const Features = () => {
  return (
    <div className='flex w-full h-full mb-6 items-center mt-7 lg:mt-16'>
        <div className='flex flex-col items-center justify-center w-[80%] mx-auto relative gap-20'>
            <div className='flex-col items-center text-center justify-between gap-3 lg:w-[60%] flex'>
                <div className='text-[#54D4BD] bg-[#EEFFFC] rounded-lg items-center justify-center py-1 px-2'>
                    <h5 className='inter text-xs'>CE Support</h5>
                </div>
                <h4 className='play font-semibold leading-8 text-sm md:text-base lg:text-xl lg:w-[70%] xl:text-2xl 2xl:text-3xl'>We're on a Mission to Change View of Medical Equipment Finanzing.</h4>
                <p className='manrope text-xs lg:text-sm xl:text-base 2xl:text-lg'>Our services are designed to cater to your specific needs and goals</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start justify-between w-[90%] mx-auto gap-6'>
                <div className='grid grid-cols-1 items-start justify-between mx-auto w-[90%] md:w-[70%] lg:w-[45%] xl:w-[55%] gap-8 py-3'>
                    <div className='flex-col items-start justify-between flex'>
                        <img src={House} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Investment</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>When unknown printer took galley of type and scrambled.</p>
                    </div>

                    <div className='flex-col items-start justify-between flex'>
                        <img src={Money} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Secure Payment</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>When unknown printer took galley of type and scrambled.</p>
                    </div>

                    <div className='flex-col items-start justify-between flex'>
                        <img src={Email} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Messaging</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>On mobile, customers can send text, or audio messages to agents, like using any messaging app</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center mt-9 justify-between mx-auto w-[90%] md:w-[70%] lg:w-[60%] gap-2 lg:h-[150px]'>
                    <div className='flex flex-col items-center justify-between gap-3'>
                        <img src={Rectangle1} alt="" />
                        <img src={Rectangle2} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-between gap-3'>
                        <img src={Rectangle3} alt="" />
                        <img src={Rectangle4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features