import React from 'react'
import BG from '../assets/BG.svg'
// import Shape from '../assets/Shape.svg'
import Icon1 from '../assets/Icons-support.svg'
import Icon2 from '../assets/Icons-invest.svg'
import Icon3 from '../assets/Icons-connect.svg'
import Icon4 from '../assets/Icons-marketplace.svg'
import Icon5 from '../assets/Icons-flow.svg'
import { BsArrowRightShort } from "react-icons/bs";
import '../index.css'


const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md flex mx-auto w-[80%] lg:w-fit xl:w-fit 2xl:w-fit p-5 lg:py-14 gap-6 items-start rounded-[20px] cursor-pointer">
      <img src={icon} alt="" className="w-[50px]" />
      {/* <img src={Shape} alt="" className='self-start w-10 h-10' /> */}
      <div className="gap-4 text-left">
        <h6 className='play -tracking-[2] leading-10 font-semibold text-xs xl:text-lg'>{title}</h6>
        <p className="manrope text-xs lg:text-sm 2xl:text-base text-left">{description}</p>
        <div className='flex flex-row items-center justify-between text-[#54D4BD] gap-1.5'>
            <button className='text-xs flex items-center gap-2 inter'>Read more <BsArrowRightShort className='w-6 h-6' /></button>
            
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  const cardContents = [
    {
      title: 'CE Support',
      description: `Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Tenetur consequatur fugiat voluptates 
      aperiam ab itaque ea repellendus nesciunt dicta iusto, 
      porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
      icon: Icon1,
    },
    {
      title: 'CE Invest',
      description: `Another Description Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Tenetur consequatur fugiat voluptates 
      aperiam ab itaque ea repellendus nesciunt dicta iusto, 
      porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
      icon: Icon2,
    },

    {
        title: 'CE ConnectEHR',
        description: `Another Description Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Tenetur consequatur fugiat voluptates 
        aperiam ab itaque ea repellendus nesciunt dicta iusto, 
        porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
        icon: Icon3,
      },

      {
        title: 'CE MArketplace',
        description: `Another Description Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Tenetur consequatur fugiat voluptates 
        aperiam ab itaque ea repellendus nesciunt dicta iusto, 
        porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
        icon: Icon4,
      },

      {
        title: 'CE Flow',
        description: `Another Description Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Tenetur consequatur fugiat voluptates 
        aperiam ab itaque ea repellendus nesciunt dicta iusto, 
        porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
        icon: Icon5,
      },
   
  ];

  return (
    <div
      className="bg-cover bg-center h-auto  sm:px-[1rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem]"
      style={{ backgroundImage: `url(${BG})` }}
    >

        <div className=" w-[80%] sm:w-[70%] md:w-[40rem] pt-[5rem] text-white flex flex-col mb-52 items-center justify-center text-center lg:w-[80%] mx-auto gap-6">
            <h1 className='text-3xl text-white play -tracking-[2] leading-10 font-semibold lg:text-2xl xl:text-4xl'>Our service</h1>
            <p className="font-['Manrope'] manrope text-xs lg:text-sm xl:text-base 2xl:text-lg w-[90%] md:w-[60%] xl:w-[40%] text-center">Phasellus interdum sagittis magna. Donec varius ultricies diam sed lacinia. Mauris porttitor. quis risus eget mattis Ut auctor.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-[5rem] gap-4">
        {cardContents.map((content, index) => (
          <Card
            key={index}
            title={content.title}
            description={content.description}
            icon={content.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;