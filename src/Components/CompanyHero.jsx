import React from 'react'
import baseImage from '../assets/Base-img-2.png'
import { Link } from 'react-router-dom'
import '../index.css'

const CompanyHero = () => {
  return (
    <div className='w-full h-[600px] lg:h-1/5'>
        <img src={baseImage} alt="CloudEquipments Experts" className='top-0 left-0 w-full h-full object-cover bg-fixed' />

        <div className='bg-neutral-200/15 absolute top-0 left-0 w-full h-screen'>
            <div className='absolute top-0 md:-top-8 lg:top-0 xl:top-1 2xl:top-1.5 w-full h-full flex flex-col items-center justify-center text-white'>
                <div className='max-w-[600px] xl:max-w-[40%] 2xl:max-w-[45%] m-auto absolute p-4'>
                    <h4 className="text-[#70FFE5] font-bold tracking-[7px] leading-6 font-['Roboto'] roboto text-sm md:text-[14px] xl:text-lg 2xl:text-2xl">Health care Facilities</h4>
                    <h1 className="2xl:text-5xl xl:text-3xl md:text-2xl text-xl font-medium leading-9 2xl:leading-[55px] xl:leading-[42px] md:leading-[30px] font-['Roboto'] roboto drop-shadow-2xl">Buy/Rent Medical Equipments from our Market place</h1>
                    <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-2xl font-normal leading-5 xl:leading-7 manrope 2xl:tracking-wider 2xl:leading-[50px] py-2 drop-shadow-2xl'>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
                    <div className='flex items-start justify-between 2xl:w-[70%] xl:w-[65%] md:w-[55%] w-[60%] md:gap-1 xl:gap-2 2xl:gap-2 mt-2 2xl:mt-4'>
                        <button className="bg-[#70FFE5] tracking-wider cursor-pointer text-black font-['Manrope'] manrope rounded-lg font-extrabold py-1.5 2xl:py-3 px-3 md:px-4 xl:px-4 2xl:px-14 items-center">
                            <Link to='/' className='text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg'>
                            Get Started
                            </Link>
                        </button>

                        <button className="bg-[#fff] tracking-wider cursor-pointer text-black font-['Manrope'] manrope rounded-lg font-extrabold py-1.5 2xl:py-3 px-3 md:px-4 xl:px-4 2xl:px-14 items-center">
                            <Link to='/' className='text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg'>
                            Read More
                            </Link>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CompanyHero