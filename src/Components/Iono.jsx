import React from 'react';
import photo from '../assets/john-fornander-Id7u0EkTjBE-unsplash (1) 1.png';
import playButton from "../assets/Play Button.svg";
import '../index.css'

const Iono = () => {
  const boxesContent = [
    {
      count: '3, 420',
      description: 'Inventory who are committed to their manbagement taska',
    },
    {
      count: '2.73%',
      description: 'Average mortage rate paid by buyers who use our services',
    },
    {
      count: '5, 378',
      description: 'Sales closed are committed to their managemnt task',
    },
  ];

  return (
    <>
      <div className='relative h-full'>
        <img className='relative object-cover w-full h-[500px] md:h-auto' src={photo} alt='A captivating visual' />
        <img alt="" className='z-10 w-[15%] h-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute top-80 sm:top-60 md:top-1/2' src={playButton} />
        
        <div className="flex text-center flex-shrink gap-5 md:gap-7 lg:gap-10 justify-center text-white absolute
         z-20 bg-[#42526B] items-center w-[95%] md:w-[80%] lg:w-[80%] mx-auto lg:bottom-[-160px] xl:bottom-[-120px] 2xl:bottom-[-100px] left-0 right-0 bottom-[-50px] px-2 lg:px-5 py-3 lg:py-10 xl:py-10 2xl:py-10">
          {boxesContent.map((box, index) => (
            <div className="flex-col" key={index}>
              <h4 className='text-[#54D4BD] play text-sm lg:text-3xl font-extrabold'>{box.count}</h4>
              <p className='manrope text-xs leading-[12px] md:leading-[10px] lg:leading-7 pt-3 lg:text-sm font-normal'>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Iono;