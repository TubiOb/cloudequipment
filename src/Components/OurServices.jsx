import React from 'react'
import BG from '../assets/BG.svg'
import Shape from '../assets/Shape.svg'
import Icon1 from '../assets/Icons-support.svg'
import Icon2 from '../assets/Icons-invest.svg'
import Icon3 from '../assets/Icons-connect.svg'
import Icon4 from '../assets/Icons-marketplace.svg'
import Icon5 from '../assets/Icons-flow.svg'
import { BsArrowRightShort } from "react-icons/bs";

const OurServices = () => {
  return (
    <div className='flex flex-col w-full items-center justify-between h-auto text-center'>
        <div className='fulll flex items-center justify-between flex-col'>
            <img src={BG} alt="" className='relative w-full h-full' />
            <div className='w-full absolute flex items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="450" height="418" viewBox="0 0 450 418" fill="none" className='absolute top-0 left-0 w-[120px] h-[78px] sm:w-[180px] sm:h-[148px] md:w-[250px] md:h-[218px] lg:w-[420px] lg:h-[380px] xl:w-auto xl:h-auto'>
                    <path d="M312 4C142 167.5 237 248 0 316C-237 384 -312 176.313 -312 4C-312 -168.313 -172.313 -308 0 -308C172.313 -308 482 -159.5 312 4Z" fill="white" fill-opacity="0.15"/>
                    <path d="M12.1349 358.294C73.9453 340.559 117.846 321.004 150.683 297.157C184.522 272.583 204.031 245.319 219.632 217.102C226.053 205.488 231.755 193.977 237.535 182.308C258.604 139.774 280.715 95.136 342.5 35.7131C392.679 -12.547 414.051 -67.1105 402.245 -122.845C391.208 -174.952 353.212 -217.073 310.557 -248.669C225.07 -311.992 95.3369 -352 0 -352C-196.613 -352 -356 -192.613 -356 4C-356 94.5891 -336.603 200.608 -280.165 276.397C-251.304 315.153 -212.375 346.394 -161.847 362.17C-111.537 377.877 -53.4271 377.105 12.1349 358.294Z" stroke="white" stroke-opacity="0.06" stroke-width="88"/>
                </svg>
                <img src={Shape} alt="" className='absolute top-16 md:top-20 lg:top-32 xl:top-24 right-2 lg:right-4 xl:right-10 w-[180px] h-[168px] md:w-[350px] md:h-[288px] lg:w-[480px] lg:h-[450px] xl:w-auto xl:h-auto' />


                <div className='flex flex-col items-center justify-between w-full bg-transparent z-50 absolute top-2 lg:top-16 text-white gap-4 lg:gap-2'>
                    <div className='flex flex-col items-center justify-center text-center lg:w-[80%] mx-auto gap-1' >
                        <h4 className="font-[Playfair Display] play -tracking-[2] leading-10 font-semibold lg:text-2xl xl:text-4xl">Our Services</h4>
                        <p className="font-['Manrope'] manrope text-xs lg:text-sm xl:text-base 2xl:text-lg w-[90%] md:w-[60%] xl:w-[40%] text-center">Phasellus interdum sagittis magna. Donec varius ultricies diam sed lacinia. Mauris porttitor. quis risus eget mattis Ut auctor.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center w-[85%] lg:py-11 lg:px-7 gap-3 lg:gap-4 2xl:gap-10'>
                        <div className='flex flex-col lg:flex-row place-items-start items-center lg:items-start z-20 justify-around gap-3 flex-shrink shadow-md backdrop-blur-lg hover:shadow-lg hover:shadow-white cursor-pointer bg-white text-black py-8 px-3 pr-8 pl-8 rounded-xl w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%]'>
                            <div className='flex lg:left-4 items-center w-[25%] md:w-[45%] lg:w-[40%] xl:w-[25%] h-full'>
                                 <img src={Icon1} alt="" className='w-[95%] h-auto' />
                            </div>
                           
                            <div className='flex flex-col items-center lg:items-start justify-between w-auto gap-2'>
                                <h6 className='play -tracking-[2] leading-10 font-semibold text-xs xl:text-lg'>CE Support</h6>
                                <p className="font-['Manrope'] manrope text-xs lg:text-sm 2xl:text-base text-center lg:text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas.</p>
                                <div className='flex flex-row items-center justify-between text-[#54D4BD] gap-1.5'>
                                    <button type="submit" className='text-xs inter'>Read More</button>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row place-items-start items-center lg:items-start z-20 justify-around gap-3 flex-shrink shadow-md backdrop-blur-lg hover:shadow-lg hover:shadow-white cursor-pointer bg-white text-black py-8 px-3 pr-8 pl-8 rounded-xl w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%]'>
                            <div className='flex lg:left-4 items-center w-[25%] md:w-[45%] lg:w-[40%] xl:w-[25%] h-full'>
                                 <img src={Icon2} alt="" className='w-[95%] h-auto' />
                            </div>
                           
                            <div className='flex flex-col items-center lg:items-start justify-between w-auto gap-2'>
                                <h6 className='play -tracking-[2] leading-10 font-semibold text-xs xl:text-lg'>CE Support</h6>
                                <p className="font-['Manrope'] manrope text-xs lg:text-sm 2xl:text-base text-center lg:text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas.</p>
                                <div className='flex flex-row items-center justify-between text-[#54D4BD] gap-1.5'>
                                    <button type="submit" className='text-xs inter'>Read More</button>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row place-items-start items-center lg:items-start z-20 justify-around gap-3 flex-shrink shadow-md backdrop-blur-lg hover:shadow-lg hover:shadow-white cursor-pointer bg-white text-black py-8 px-3 pr-8 pl-8 rounded-xl w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%]'>
                            <div className='flex lg:left-4 items-center w-[25%] md:w-[45%] lg:w-[40%] xl:w-[25%] h-full'>
                                 <img src={Icon3} alt="" className='w-[95%] h-auto' />
                            </div>
                           
                            <div className='flex flex-col items-center lg:items-start justify-between w-auto gap-2'>
                                <h6 className='play -tracking-[2] leading-10 font-semibold text-xs xl:text-lg'>CE Support</h6>
                                <p className="font-['Manrope'] manrope text-xs lg:text-sm 2xl:text-base text-center lg:text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas.</p>
                                <div className='flex flex-row items-center justify-between text-[#54D4BD] gap-1.5'>
                                    <button type="submit" className='text-xs inter'>Read More</button>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row place-items-start items-center lg:items-start z-20 justify-around gap-3 flex-shrink shadow-md backdrop-blur-lg hover:shadow-lg hover:shadow-white cursor-pointer bg-white text-black py-8 px-3 pr-8 pl-8 rounded-xl w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%]'>
                            <div className='flex lg:left-4 items-center w-[25%] md:w-[45%] lg:w-[40%] xl:w-[25%] h-full'>
                                 <img src={Icon4} alt="" className='w-[95%] h-auto' />
                            </div>
                           
                            <div className='flex flex-col items-center lg:items-start justify-between w-auto gap-2'>
                                <h6 className='play -tracking-[2] leading-10 font-semibold text-xs xl:text-lg'>CE Support</h6>
                                <p className="font-['Manrope'] manrope text-xs lg:text-sm 2xl:text-base text-center lg:text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas.</p>
                                <div className='flex flex-row items-center justify-between text-[#54D4BD] gap-1.5'>
                                    <button type="submit" className='text-xs inter'>Read More</button>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row place-items-start items-center lg:items-start z-20 justify-around gap-3 flex-shrink shadow-md backdrop-blur-lg hover:shadow-lg hover:shadow-white cursor-pointer bg-white text-black py-8 px-3 pr-8 pl-8 rounded-xl w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%]'>
                            <div className='flex lg:left-4 items-center w-[25%] md:w-[45%] lg:w-[40%] xl:w-[25%] h-full'>
                                 <img src={Icon5} alt="" className='w-[95%] h-auto' />
                            </div>
                           
                            <div className='flex flex-col items-center lg:items-start justify-between w-auto gap-2'>
                                <h6 className='play -tracking-[2] leading-10 font-semibold text-xs xl:text-lg'>CE Support</h6>
                                <p className="font-['Manrope'] manrope text-xs lg:text-sm 2xl:text-base text-center lg:text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas.</p>
                                <div className='flex flex-row items-center justify-between text-[#54D4BD] gap-1.5'>
                                    <button type="submit" className='text-xs inter'>Read More</button>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default OurServices