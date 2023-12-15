import React from 'react'
import logo from '../assets/Rectangle-logo.svg'
import { RiFacebookCircleFill, RiTwitterFill } from "react-icons/ri";
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io'
import '../index.css'

const Footer = () => {
  return (
    <div className='w-full  items-center justify-between'>
        <div className='flex bg-[rgb(66,82,107)] w-full lg:min-w-[1120px] items-center lg:items-start justify-between gap-2 flex-wrap lg:pt-16 lg:px-28'>
            <div className='w-full lg:w-[45%] flex-col text-white flex gap-10 px-3 py-5 lg:py-0 bottom-0'>
                <img src={logo} alt="Cloud Equipment" className='w-52 h-12' />
                <p className='manrope text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base font-normal leading-5'>We are always open to discuss your project and improve your online presence.</p>
                <div className='flex flex-shrink flex-col lg:flex-row items-start lg:items-center justify-between text-[#40484F] gap-3 px-2 py-3 lg:p-4 bg-[#54D4BD]'>
                    <div className='flex-col'>
                        <h4 className='pop text-sm lg:text-base font-medium leading-8'>Email me at</h4>
                        <p className='pop font-normal text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-7'>contact@website.com</p>
                    </div>
                    <div className='flex-col'>
                        <h4 className='pop text-sm lg:text-base font-medium leading-8'>Call Us</h4>
                        <p className='pop font-normal text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-7'>0927 6277 28525</p>
                    </div>
                    <div className='flex-col'>
                        <h4 className='pop text-sm lg:text-base font-medium leading-8'>Social Media</h4>
                        <div className='flex flex-row items-center gap-1.5 lg:gap-2'>
                            <RiFacebookCircleFill className='fill-black' size={20} />
                            <RiTwitterFill className='fill-black' size={20} />
                            <IoLogoInstagram className='fill-black' size={20} />
                            <IoLogoLinkedin className='fill-black' size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <ul className='nuni text-white w-full lg:w-[10%] grid gap-1 lg:gap-3 p-3'>
                <li className='text-base lg:text-lg xl:text-lg 2xl:text-lg font-black leading-7 uppercase'>Company</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Our Story</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Careers</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Community</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>About Us</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Press</li>
            </ul>
            <ul className='nuni text-white w-full lg:w-[10%] grid gap-1 lg:gap-3 p-3'>
                <li className='text-base lg:text-lg xl:text-lg 2xl:text-lg font-black leading-7 uppercase'>Legal</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Legal</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Terms and conditions</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Privacy Policy</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Disclaimer</li>
                
            </ul>
            <ul className='nuni text-white w-full lg:w-[10%] grid gap-1 lg:gap-3 p-3'>
                <li className='text-base lg:text-lg xl:text-lg 2xl:text-lg font-black leading-7 uppercase'>Resources</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>For Investors</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>For OEMs & Suppliers</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>For Healthcare Providers</li>
                <li className='font-normal text-sm lg:text-base xl:text-base 2xl:text-base leading-7'>Others</li>
            </ul>
        </div>

        <div className='w-full flex-col bg-white flex gap-4'>
            <div className='flex w-full items-start lg:items-center xl:items-center 2xl:items-center justify-between gap-2 flex-wrap p-5'>
                <h3 className='pop font-medium w-full lg:w-[45%] leading-6 text-xs lg:text-center lg:text-sm xl:text-sm 2xl:text-sm'>CloudEquipment.com © Copyright 2023</h3>
                <ul className='nuni w-full lg:w-[30%] flex gap-4 lg:gap-9 p-0 lg:p-3'>
                    <li className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni font-bold leading-7'>Product</li>
                    <li className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni font-bold leading-7'>Company</li>
                    <li className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni font-bold leading-7'>resources</li>
                    
                </ul>
            </div>

            <div className='flex-col flex items-start w-full gap-5 py-2 px-4 lg:px-20'>
                <p className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni'>Cloud Equipment Medical software and technology web platform is licensed and used by investors and health care facilities to make available to investors information related to sponsors’ medical equipment investment offerings (the “Platform”). 
                    This website is part of the Platform and is operated by Reef Financial Solutions. 
                    By accessing this site and any pages thereof, you agree to be bound by our <a href="/">Terms of Service and</a> <a href="/">Privacy Policy .</a></p>

                <p className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni'>*All information contained on CloudEquipment Medical or in any advertisement linking to, CloudEquipment Medical concerning any prospective or actual real estate investment, including information concerning projected or targeted returns and investment performance, 
                    is provided by the relevant sponsor and/or issuer (or their affiliates) of the relevant real estate investment opportunity and not by Cloud Equipment Medical and is subject to change. Such information is 
                    subject to the disclosures herein and on the Disclosures page, on the Disclaimers page for such real estate investment opportunity and is qualified in its entirety by the more comprehensive information provided in the relevant sponsor and/or issuer’s offering documentation. 
                    Unless affirmatively and specifically stated to the contrary, CloudEquipment Medical and its affiliates make no representations or warranties as to the accuracy of an issuer’s information, including in advertisements, and accepts no liability therefor.</p>

                <p className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni'>Nothing on this website should be regarded as investment advice, either on behalf of a particular security or regarding an overall investment strategy, a recommendation, an offer to sell, or a solicitation of or an offer to buy any security. Advice from a securities professional is strongly advised, 
                    and we recommend that you consult with a financial advisor, attorney, accountant, and any other professional that can help you to understand and assess the risks associated with any real estate investment.</p>

                <p className='text-xs lg:text-sm xl:text-sm 2xl:text-sm nuni'>Please carefully review all disclosures here before accessing CloudEquipment Medical.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer