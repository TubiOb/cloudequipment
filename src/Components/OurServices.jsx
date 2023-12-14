import React from 'react'
import BG from '../assets/BG.svg'
import Shape from '../assets/Shape.svg'
import Icon1 from '../assets/Icons-support.svg'
import Icon2 from '../assets/Icons-invest.svg'
import Icon3 from '../assets/Icons-connect.svg'
import Icon4 from '../assets/Icons-marketplace.svg'
import Icon5 from '../assets/Icons-flow.svg'
import { BsArrowRightShort } from "react-icons/bs";


const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md flex w-fit p-5 gap-3 items-start rounded-[20px]">
      <img src={icon} alt="" className="w-[50px]" />
      <div className="">
        <h2>{title}</h2>
        <p className="">{description}</p>
        <p>Read more</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  const cardContents = [
    {
      title: 'Custom Title 1',
      description: `Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Tenetur consequatur fugiat voluptates 
      aperiam ab itaque ea repellendus nesciunt dicta iusto, 
      porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
      icon: Icon1,
    },
    {
      title: 'Custom Title 2',
      description: `Another Description Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Tenetur consequatur fugiat voluptates 
      aperiam ab itaque ea repellendus nesciunt dicta iusto, 
      porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
      icon: Icon2,
    },

    {
        title: 'Custom Title 3',
        description: `Another Description Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Tenetur consequatur fugiat voluptates 
        aperiam ab itaque ea repellendus nesciunt dicta iusto, 
        porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
        icon: Icon3,
      },

      {
        title: 'Custom Title 4',
        description: `Another Description Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Tenetur consequatur fugiat voluptates 
        aperiam ab itaque ea repellendus nesciunt dicta iusto, 
        porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
        icon: Icon4,
      },

      {
        title: 'Custom Title 5',
        description: `Another Description Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Tenetur consequatur fugiat voluptates 
        aperiam ab itaque ea repellendus nesciunt dicta iusto, 
        porro obcaecati, vero vitae qui ullam. Modi dolores molestiae porro.`,
        icon: Icon5,
      },
   
  ];

  return (
    <div
      className="bg-cover bg-center h-[600px]  sm:px-[1rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem]"
      style={{ backgroundImage: `url(${BG})` }}
    >

        <div className="text-center w-[90%] sm:w-[70%] md:w-[40rem] mx-auto pt-[5rem]">
            <h1 className='text-3xl text-white'>Our service</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Beatae ratione nostrum, rem quae reiciendis minima aliquid tempore.</p>
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