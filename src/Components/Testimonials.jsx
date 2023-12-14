import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import elipse from '../assets/Ellipse 18.png'
import elipse1 from '../assets/Ellipse 18.1.png'
import elipse2 from '../assets/Ellipse 18.2.png'
import quote from '../assets/left-quote 1.svg'
import '../index.css'

const Testimonials = () => {
  return (
    <div className='w-full flex h-auto p-[5%] lg:p-[10%] flex-col items-center justify-between'>
        <div className='lg:w-[70%] md:w-[90%] w-full flex items-center justify-center flex-col'>
            <div className='flex flex-row items-center gap-1'>
                <HiArrowLongRight size={26} className='text-[#54D4BD]' />
                <h4 className='font-semibold text-base tracking-wide leading-5 text-[#54D4BD] vietnam'>Our Client</h4>
            </div>
            <h4 className='font-extrabold font-[Playfair Display] play text-xl lg:text-2xl xl:text-3xl tracking-wide leading-7'> Testimonial</h4>
            <div className='flex mx-auto lg:w-[85%] md:[75%] w-[90%] text-center leading-3 mt-2'>
                <p className='text-sm md:text-base xl:text-lg font-normal leading-5 py-2 z-20 drop-shadow-2xl manrope'>
                    When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website. By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="206" height="206" viewBox="0 0 96 96" fill="none" className='-top-[-40] z-10 left-0 text-blue-200'>
                    <g clip-path="url(#clip0_369_10114)">
                        <path d="M30.5117 43.9384C28.1637 43.2624 25.8157 42.9194 23.5317 42.9194C20.0047 42.9194 17.0617 43.7254 14.7797 44.7124C16.9797 36.6584 22.2647 22.7614 32.7927 21.1964C33.7677 21.0514 34.5667 20.3464 34.8327 19.3974L37.1337 11.1674C37.3277 10.4714 37.2127 9.72642 36.8157 9.12242C36.4187 8.51842 35.7807 8.11542 35.0657 8.01742C34.2887 7.91142 33.4967 7.85742 32.7117 7.85742C20.0747 7.85742 7.55972 21.0474 2.27872 39.9334C-0.821281 51.0134 -1.73028 67.6714 5.90572 78.1564C10.1787 84.0234 16.4127 87.1564 24.4347 87.4694C24.4677 87.4704 24.4997 87.4714 24.5327 87.4714C34.4307 87.4714 43.2077 80.8054 45.8777 71.2624C47.4727 65.5574 46.7517 59.5744 43.8457 54.4114C40.9707 49.3064 36.2357 45.5854 30.5117 43.9384Z" fill="#E8EFFC"/>
                        <path d="M92.4708 54.4124C89.5958 49.3064 84.8608 45.5854 79.1368 43.9384C76.7888 43.2624 74.4408 42.9194 72.1578 42.9194C68.6308 42.9194 65.6868 43.7254 63.4048 44.7124C65.6048 36.6584 70.8898 22.7614 81.4188 21.1964C82.3938 21.0514 83.1918 20.3464 83.4588 19.3974L85.7598 11.1674C85.9538 10.4714 85.8388 9.72642 85.4418 9.12242C85.0458 8.51842 84.4078 8.11542 83.6918 8.01742C82.9158 7.91142 82.1238 7.85742 81.3378 7.85742C68.7008 7.85742 56.1858 21.0474 50.9038 39.9334C47.8048 51.0134 46.8958 67.6714 54.5328 78.1584C58.8048 84.0244 65.0398 87.1584 73.0608 87.4704C73.0938 87.4714 73.1258 87.4724 73.1598 87.4724C83.0568 87.4724 91.8348 80.8064 94.5048 71.2634C96.0978 65.5584 95.3758 59.5744 92.4708 54.4124Z" fill="#E8EFFC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_369_10114">
                        <rect width="95.333" height="95.332" fill="white" transform="translate(0 -0.000976562)"/>
                        </clipPath>
                    </defs>
                </svg>
                {/* <img src={quote} alt="" className='w-16 h-16 top-5 z-10 left-0 text-blue-200' /> */}
            </div>
            
        </div>
        <div className='border-t-2 lg:w-[85%] mx-auto w-[90%] border-opacity-5 flex items-start lg:items-center justify-center lg:justify-between lg:flex-row flex-col gap-4 mt-5 py-3 lg:py-0 lg:px-4 px-2'>
            <div className='flex items-center justify-between flex-row gap-3 '>
                <img src={elipse} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 vietnam'>Cha Ji-Hun</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-[#54D4BD] vietnam'>Co-founder of Forpeople</p>
                </div>
            </div>
            <div className='flex items-center lg:border-t-2 pt-3 lg:pt-[-10] lg:border-t-[#54D4BD] justify-between flex-row gap-3 '>
                <img src={elipse1} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-3 '>Ruthvietnamerford Brannan</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-[#54D4BD] vietnam'>Design director of Perfect Illustration</p>
                </div>
            </div>
            <div className='flex items-center justify-between flex-row gap-3 '>
                <img src={elipse2} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 '>vietnamHenry Itondo</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-[#54D4BD] vietnam'>Co-founder of Source DS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials