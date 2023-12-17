import React from 'react'
import House from '../assets/house 1 (Traced).svg'
import Money from '../assets/money 1 (Traced).svg'
import Email from '../assets/Featured Icons.svg'
import Picture from '../assets/Picture.png'
import Picture1 from '../assets/Picture1.png'
import Picture2 from '../assets/Picture2.png'
import Picture3 from '../assets/Picture4.png'
import '../index.css'

const ResourceFeatures = () => {
  return (
    <div className='flex w-full h-full mb-64 items-center '>
        <div className='flex flex-col items-center justify-center w-[80%] mx-auto relative gap-20'>
            <div className='flex-col items-center text-center justify-between gap-3 lg:w-[60%] flex'>
                <div className='text-[#54D4BD] bg-[#EEFFFC] rounded-lg items-center justify-center py-1 px-2'>
                    <h5 className='inter text-xs'>CE Support</h5>
                </div>
                <h4 className='play font-semibold leading-8 text-base md:text-xl lg:text-2xl lg:w-[70%] xl:text-3xl 2xl:text-4xl'>We're on a Mission to Change View of Medical Equipment Finanzing.</h4>
                <p className='manrope text-xs lg:text-sm xl:text-base 2xl:text-lg'>Our services are designed to cater to your specific needs and goals</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start justify-between w-[90%] mx-auto gap-6'>
                <div className='grid grid-cols-1 items-start justify-between mx-auto w-[90%] md:w-[70%] lg:w-[45%] xl:w-[70%] gap-8 py-3'>
                    <div className='flex-col items-start justify-between flex gap-1'>
                        <img src={House} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Investment</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>When unknown printer took galley of type and scrambled.</p>
                    </div>

                    <div className='flex-col items-start justify-between flex gap-1'>
                        <img src={Money} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Secure Payment</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>When unknown printer took galley of type and scrambled.</p>
                    </div>

                    <div className='flex-col items-start justify-between flex gap-1'>
                        <img src={Email} alt="" className='w-14 h-9' />
                        <h4 className='play leading-8 font-medium text-base lg:text-lg'>Messaging</h4>
                        <p className='manrope text-xs xl:text-sm 2xl:text-sm'>On mobile, customers can send text, or audio messages to agents, like using any messaging app</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center pt-9 justify-between mx-auto w-[90%] md:w-[70%] lg:w-[90%]'>
                    <div className='flex flex-col items-center justify-between gap-2'>
                        <img src={Picture1} alt="" />
                        <img src={Picture} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-between gap-2'>
                        <img src={Picture3} alt="" />
                        <img src={Picture2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResourceFeatures