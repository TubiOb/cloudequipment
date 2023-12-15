import React from 'react'
import '../index.css'
import Picture from '../assets/Picture.png'
import Picture1 from '../assets/Picture1.png'
import Picture2 from '../assets/Picture2.png'
import Picture3 from '../assets/Picture4.png'

const ResourceAccess = () => {
  return (
    <div className='w-full flex-col flex items-center my-24 lg:items-start gap-20'>
        <div className='flex flex-col lg:flex-row items-center w-full gap-2 p-4'>
            <div className='grid grid-cols-1 grid-rows-1 items-center lg:items-end pt-9 w-full mx-auto md:w-[70%] lg:w-[40%] gap-4'>
                <div className='flex items-start gap-3 w-[40%] lg:w-[40%]'>
                    <img src={Picture} alt="" className='object-cover' />
                </div>
                <div className='flex flex-row items-center gap-3 w-[40%] lg:w-[40%]'>
                    <img src={Picture1} alt="" className='object-cover'  />
                    <img src={Picture2} alt="" className='object-cover' />
                </div>
            </div>
            <div className='flex flex-col items-start justify-center w-full lg:w-[50%] p-4 lg:px-48 gap-4'>
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
                <h4 className='play font-extrabold leading-4 md:leading-7 lg:leading-9 tracking-tight text-3xl lg:text-4xl'>Team management.</h4>
                <h4 className='play font-extrabold leading-6 md:leading-7 lg:leading-9 tracking-tight text-3xl lg:text-4xl text-[#54D4BD]'>Effortless syncronization.</h4>
                <p className='roboto font-normal leading-6 text-xs lg:text-sm text-[#CBD5E1]'>Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus. Mi commodo id maecenas amet, elementum a, in.</p>
                <ul className='manrope font-normal text-xs lg:text-sm'>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.4862 17.23C10.355 17.2303 10.2249 17.2046 10.1036 17.1545C9.98229 17.1044 9.87205 17.0308 9.77923 16.938L5.53723 12.695C5.44166 12.6028 5.3654 12.4925 5.31291 12.3706C5.26041 12.2486 5.23274 12.1174 5.23149 11.9846C5.23024 11.8519 5.25545 11.7202 5.30565 11.5972C5.35584 11.4743 5.43001 11.3626 5.52384 11.2686C5.61766 11.1747 5.72926 11.1004 5.85212 11.05C5.97498 10.9996 6.10664 10.9742 6.23942 10.9753C6.3722 10.9763 6.50344 11.0038 6.62548 11.0562C6.74752 11.1085 6.85792 11.1846 6.95023 11.28L10.4852 14.815L16.8502 8.45202C17.0377 8.26438 17.2921 8.15891 17.5574 8.15881C17.8226 8.15872 18.0771 8.26401 18.2647 8.45152C18.4524 8.63902 18.5578 8.89339 18.5579 9.15866C18.558 9.42393 18.4527 9.67838 18.2652 9.86602L11.1932 16.938C11.1004 17.0308 10.9902 17.1044 10.8688 17.1545C10.7475 17.2046 10.6175 17.2303 10.4862 17.23Z" fill="#818CF8"/>
                        </svg>
                        <li>Ullamcorper ornare in et egestas dolor orci.</li>
                    </div>
                </ul>
            </div>
            <div className='flex items-start flex-shrink-0 w-full lg:w-[50%] mr-auto'>
                <img src={Picture3} alt="" className='object-cover w-full lg:w-[55%] self-start mx-auto' />
            </div>
            
        </div>
    </div>
  )
}

export default ResourceAccess