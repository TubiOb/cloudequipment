import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import elipse from '../assets/Ellipse 18.png'
import elipse1 from '../assets/Ellipse 18.1.png'
import elipse2 from '../assets/Ellipse 18.2.png'
import quote from '../assets/left-quote 1.svg'
import '../index.css'

const Testimonials = () => {
  return (
    <div className='w-full flex h-full pt-[25%] p-[5%] lg:p-[10%] flex-col items-center justify-between'>
        <div className='lg:w-[70%] md:w-[90%] w-full flex items-center justify-center flex-col gap-6'>
            <div className='flex flex-row items-center gap-1'>
                <HiArrowLongRight size={26} className='text-[#54D4BD]' />
                <h4 className='font-semibold text-base tracking-wide leading-5 text-[#54D4BD] vietnam'>Our Client</h4>
            </div>
            <h4 className='font-extrabold font-[Playfair Display] play text-xl lg:text-2xl xl:text-3xl tracking-wide leading-7'> Testimonial</h4>
            <div className='flex flex-row mx-auto lg:w-[85%] md:[75%] w-[90%] text-left md:text-center mt-9 lg:text-center xl:text-center items-start justify-start'>
                <img src={quote} alt="" className='w-10 h-10 lg:w-16 lg:h-16 top-0 opacity-50 z-10 self-start text-blue-200' />
                <p className='text-sm md:text-base xl:text-lg font-normal text-center leading-5 py-2 z-20 drop-shadow-2xl manrope'>
                    When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website. By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.
                </p>
                
            </div>
            
        </div>
        <div className='border-t-2 lg:w-[85%] mx-auto w-[90%] border-opacity-5 flex items-start lg:items-center justify-center lg:justify-between lg:flex-row flex-col gap-4 mt-5 py-3 lg:py-3 lg:px-4 px-2'>
            <div className='flex items-center justify-between flex-row gap-3 '>
                <img src={elipse} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 vietnam'>Cha Ji-Hun</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-[#54D4BD] vietnam'>Co-founder of Forpeople</p>
                </div>
            </div>
            <div className='flex items-center lg:border-t-2 pt-4 lg:mt-[-14px] lg:border-t-[#54D4BD] justify-between flex-row gap-3 '>
                <img src={elipse1} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 vietnam'>Rutherford Brannan</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-[#54D4BD] vietnam'>Design director of Perfect Illustration</p>
                </div>
            </div>
            <div className='flex items-center justify-between flex-row gap-3 '>
                <img src={elipse2} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 vietnam'>Henry Itondo</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-[#54D4BD] vietnam'>Co-founder of Source DS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials