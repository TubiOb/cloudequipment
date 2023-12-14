import React, { useState, useEffect } from 'react'
import logo from '../assets/Clip path group.svg'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { IoPersonCircle } from "react-icons/io5";
import C from '../assets/Vector-c.svg'
import L from '../assets/Vector-l.svg'
import O from '../assets/Vector-o.svg'
import U from '../assets/Vector-u.svg'
import D from '../assets/Vector-d.svg'
import E from '../assets/Vector-e.svg'
import Q from '../assets/Vector-q.svg'
import U2 from '../assets/Vector-u2.svg'
import I from '../assets/Vector-i.svg'
import P from '../assets/Vector-p.svg'
import M from '../assets/Vector-m.svg'
import E2 from '../assets/Vector-e2.svg'
import N from '../assets/Vector-n.svg'
import T from '../assets/Vector-t.svg'


const Navigation = () => {
  const location = useLocation();
  // const [activeLi, setActiveLi] = useState('Products');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
      // setActiveLi('Home');
  }, [location.pathname]);

  const handleClick = (clickedLink) => {
      // console.log(`Clicked on: ${clickedLink}`);
      // setActiveLi(clickedLink);
      setIsMenuOpen(false);
  };

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  let links = [
      {name: 'Products', link: '/product'},
      {name: 'Company', link: '/company'},
      {name: 'Resources', link: '/resources'},
  ]

  return (
    <div className={`sticky bg-white z-40 flex xl:flex-row lg:flex-row 2xl:flex-row md:flex-col flex-col items-start md:items-start lg:items-center xl:items-center 2xl:items-center justify-between right-0 lg:w-full xl:w-full 2xl:w-full w-[70%] md:w-[50%] lg:h-14 xl:h-14 2xl:h-16 h-full md:h-full lg:py-1 px-5 py-10 xl:py-4 xl:px-8 gap-9 lg:gap-1 ${isMenuOpen ? 'right-0' : 'right-[-100%]'} `}>
      <div className='w-16 h-6 cursor-pointer flex flex-row gap-2'>
          <Link to='/product' className='w-full h-full cursor-pointer flex flex-row items-center justify-between gap-2'>
              <img src={logo} alt="Golio" className='w-full h-full' />
              <h2 className="flex text-neutral-500 font-['Manrope'] font-bold text-lg 2xl:text-2xl tracking-wide">Cloud<span className='font-normal'>Equipment</span></h2>
          </Link>
          
      </div>

            
            
            

      <ul className='flex h-[50%] lg:h-full lg:flex-row flex-col lg:items-center xl:items-center items-start justify-between lg:py-3 list-none gap-0.5 md:gap-1 lg:gap-2 text-sm md:text-base 2xl:text-xl py-8 lg:px-1 px-0.5'>
          {links.map((link) => (
            <Link to={link.link} key={link.name}>
              <li className={`transition-all cursor-pointer py-2 px-4 duration-300 ${location.pathname === link.link ? ' text-[#54D4BD] md:hover:bg-neutral-200 lg:hover:bg-transparent lg:hover:rounded-none hover:rounded-md' : ' text-neutral-500 hover:text-[#54D4BD] '}`}  onClick={() => handleClick(link.name)}>
                  {link.name}
              </li>
            </Link>
          ))}
      </ul>

      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-start lg:items-center xl:items-center 2xl:items-center justify-between gap-1.5 md:gap-1 lg:gap-4 xl:gap-6 2xl:gap-6 py-5 xl:px-4 2xl:px-4 lg:py-3 xl:py-2 2xl:py-2 lg:px-1 px-4'>
        <h5 className='text-neutral-500 hover:text-[#54D4BD] text-sm md:text-base 2xl:text-xl'>Login</h5>
        <div className='flex flex-row items-center justify-between bg-[#54D4BD] text-white tracking-wider hover:bg-neutral-800/90 text-sm md:text-base 2xl:text-xl rounded-md font-normal py-1 px-2.5 lg:font-medium gap-2'>
          <IoPersonCircle />
          <button type="submit" className=''>Become an Investor</button>
        </div>
        
      </div>
      

      <div className='md:fixed fixed right-10 z-50 top-6 cursor-pointer flex md:flex lg:hidden xl:hidden 2xl:hidden' onClick={toggleMenu}>
            {isMenuOpen 
                ?
                (<LiaWindowCloseSolid  size={30} className='text-black z-50 fixed' />)
                :
                (<HiMenuAlt3 size={30} className='text-white z-50 fixed bg-gradient-to-r from-blue-300 via-black rounded-lg to-green-500' />)
            }
      </div>
    </div>
  )
}

export default Navigation