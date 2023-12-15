import React from 'react'
import Image from '../assets/Frame 132.png'
import Arrow from '../assets/Arrow 4.svg'
import '../index.css'

const AboutUs = () => {
  return (
    <div className='w-full h-auto flex flex-wrap items-center justify-between lg:justify-evenly gap-8 lg:gap-2 bg-white py-[10%] px-[5%] lg:py-[18%] lg:px-[13%]'>
        <img src={Image} alt="Couple of staffs smiling" className='w-[85%] mx-auto lg:w-[50%]' />
        <div className='md:w-[40%] flex items-start justify-between flex-col gap-4 lg:gap-10 py-3 px-1'>
            <div className='flex items-center justify-between flex-row gap-2.5'>
                <img src={Arrow} alt="right-arrow" />
                <h4 className="font-['Be Vietnam Pro'] vietnam text-[#54D4BD] font-normal leading-6 text-sm lg:text-base xl:text-lg 2xl:text-xl">About Us</h4>
            </div>
            <h2 className="font-['Playfair Display'] play font-bold leading-[25px] lg:leading-[35px] text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Diversify your wealth to help grow the medical sector</h2>
            <p className="font-['Manrope'] manrope text-xs lg:text-sm xl:text-base 2xl:text-lg">We assist with financing to minimise upfront costs as well as operational and maintenance support. This helps you get the most out of the equipment and ensure the best quality care to your patients and the public.</p>
        </div>
    </div>
  )
}

export default AboutUs