import React from 'react'
// import aside from '../assets/Spinning Geometric Shapes.svg'
import '../index.css'

const Newsletter = () => {
  return (
    <div className='bg-transparent flex items-center justify-center mt-4'>
        <div className='bg-white lg:w-[90%] xl:w-[95%] w-full h-auto flex items-center justify-center py-2 px-3 lg:py-7 lg:px-10'>
            <div className='rounded-lg bg-[#EEFFFC] w-[95%] flex flex-row px-5 py-7 mx-auto'>
                <div className='flex items-start justify-between w-[100%] mx-auto lg:w-[65%] z-20 flex-col gap-4 lg:gap-2.5'>
                    <h4  className='font-semibold text-base lg:text-2xl tracking-normal leading-3 lg:leading-6 play'>Enter your e-mail address and get started for free</h4>
                    <p className='text-sm lg:text-sm font-normal leading-5 lg:leading-3 py-2 drop-shadow-2xl inter'>Stay up to date with the most relevant information, our new collections, news and special offers!</p>
                    <div className='flex flex-row items-center w-[90%] justify-between gap-2 lg:gap-1'>
                        <input type="email" name="email" value="" placeholder='Your e-mail address' className='text-sm md:text-base py-1.5 px-2.5 self-stretch w-[70%] rounded-md' />
                        <button type="submit" className='bg-[#54D4BD] text-white tracking-wider hover:bg-neutral-700/90 text-sm  md:text-base rounded-md lg:text-sm font-normal py-1.5 px-2 lg:font-medium'>Subscribe</button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="205" height="172" viewBox="40 10 205 272" fill="none">
                    <path opacity="0.5" d="M371.461 384.5L455 -12M349.085 384.5L443.066 -12M326.708 384.5L431.629 -12M303.337 384.5L419.695 -11.5M279.966 384.5L407.761 -11.5M256.595 384.5L394.832 -11.5M231.235 384.5L382.401 -11M205.875 385L368.477 -11M179.52 385L354.554 -11M152.171 384.5L340.134 -11M124.325 384.5L324.719 -11M95.4841 384.5L308.807 -11M65.1515 384.5L292.397 -11M34.3216 384.5L274.993 -11M2 385L258.584 -11" stroke="url(#paint0_linear_373_799)" stroke-width="3"/>
                    <defs>
                        <linearGradient id="paint0_linear_373_799" x1="2" y1="385" x2="514.987" y2="279.396" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#54D4BD"/>
                        <stop offset="1" stop-color="54D4BD"/>
                        </linearGradient>
                    </defs>
                </svg>
                {/* <div className='flex items-center w-[60%] h-full lg:w-[30%] opacity-30 z-10 top-0 right-0 bottom-0'>
                    
                </div> */}
            </div>
        </div>
    </div>
    
  )
}

export default Newsletter