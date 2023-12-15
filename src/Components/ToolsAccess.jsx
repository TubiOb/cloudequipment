import React from 'react'
import '../index.css'
import Tech from '../assets/technology 1.png'
// import Image from '../assets/image 2.svg'
// import Check from '../assets/List Item With.svg'
import Doctor from '../assets/doctor 1.png'

const ToolsAccess = () => {
  return (
    <div className='w-full flex-col flex items-center mb-52 lg:items-start gap-20'>
        <div className='flex flex-col xl:flex-row items-center justify-between gap-3 p-4'>
            <div className='flex items-end flex-shrink-0 w-[60%]'>
                <img src={Tech} alt="" className='object-cover w-full lg:w-[60%] self-end mx-auto' />
            </div>
            <div className='flex flex-col items-start justify-center p-4 lg:px-48 gap-4'>
                <h4 className='play font-extrabold leading-4 md:leading-7 lg:leading-9 tracking-tight text-3xl lg:text-4xl'>Powerful tools.</h4>
                <h4 className='play font-extrabold leading-4 md:leading-7 lg:leading-9 tracking-tight text-3xl lg:text-4xl text-[#54D4BD]'>More control.</h4>
                <p className='roboto font-normal leading-6 text-xs lg:text-sm text-[#CBD5E1]'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                <ul className='manrope font-normal text-xs lg:text-sm'>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Interdum volutpat turpis malesuada ac turpis.</li>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Tortor ipsum pretium quis nunc.</li>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Vitae odio a id purus in.</li>
                    </div>
                </ul>
            </div>
        </div>

        <div className='flex flex-col xl:flex-row items-center justify-between gap-3 p-4'>
            <div className='flex flex-col items-start justify-center p-4 lg:px-48 gap-4'>
                <h4 className='play font-extrabold leading-7 lg:leading-9 tracking-tight text-3xl lg:text-4xl'>Increasing Access to Quality</h4>
                <h4 className='play font-extrabold leading-4 md:leading-7 lg:leading-9 tracking-tight text-3xl lg:text-4xl text-[#54D4BD] capitalize'>life-saving machines</h4>
                <p className='roboto font-normal leading-6 text-xs lg:text-sm'>We assist with financing to minimise upfront costs as well as operational and maintenance support. This helps you get the most out of the equipment and ensure the best quality care to your patients and the public.</p>
                <ul className='manrope font-normal text-xs lg:text-sm'>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Interdum volutpat turpis malesuada ac turpis.</li>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Tortor ipsum pretium quis nunc.</li>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Vitae odio a id purus in.</li>
                    </div>
                </ul>
            </div>
            <div className='flex items-start flex-shrink-0 w-full lg:w-[60%]'>
                <img src={Doctor} alt="" className='object-cover w-full lg:w-[60%] self-start mx-auto' />
            </div>
            
        </div>
    </div>
  )
}

export default ToolsAccess