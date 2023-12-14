import React from 'react'
import baseImage from '../assets/Base-img-1.svg'
import { Link } from 'react-router-dom' 

const ResourcesHero = () => {
  return (
    <div className='w-full h-1/5'>
        <img src={baseImage} alt="Golio Experts" className='top-0 left-0 w-full h-screen object-cover bg-fixed' loading='lazy' />

        <div className='bg-neutral-200/15 absolute top-0 left-0 w-full h-screen'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:right-[8%] max-w-[600px] xl:max-w-[40%] 2xl:max-w-[45%] m-auto absolute p-4'>
                    <h4 className="text-[#70FFE5] font-bold tracking-[7px] leading-6 font-['Roboto'] text-sm md:text-[14px] xl:text-lg 2xl:text-2xl">INVESTORS</h4>
                    <h1 className="2xl:text-7xl xl:text-5xl md:text-4xl text-3xl font-medium leading-9 2xl:leading-[80px] xl:leading-[72px] md:leading-[60px] font-['Roboto'] drop-shadow-2xl">Invest in Medical equipment for African Healthcare and get ROI</h1>
                    <p className='text-sm md:text-base lg:text-xl xl:text-xl 2xl:text-4xl font-normal leading-5 xl:leading-7 2xl:tracking-wider 2xl:leading-[50px] py-2 drop-shadow-2xl'>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
                    <div className='flex items-start justify-between 2xl:w-[55%] xl:w-[65%] md:w-[55%] w-[90%] md:gap-1 xl:gap-2 2xl:gap-2 mt-2 2xl:mt-4'>
                        <button className="bg-[#70FFE5] tracking-wider cursor-pointer text-black font-['Manrope'] rounded-lg font-extrabold py-1.5 2xl:py-5 px-3 md:px-4 xl:px-4 2xl:px-9 items-center">
                            <Link to='/product' className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-2xl'>
                            Get Started
                            </Link>
                        </button>

                        <button className="bg-[#fff] tracking-wider cursor-pointer text-black font-['Manrope'] rounded-lg font-extrabold py-1.5 2xl:py-5 px-3 md:px-4 xl:px-4 2xl:px-9 items-center">
                            <Link to='/product' className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-2xl'>
                            Get Started
                            </Link>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ResourcesHero