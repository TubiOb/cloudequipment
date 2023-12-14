import React from 'react'
import '../index.css'
import Navigation from '../Components/Navigation'
import CompanyHero from '../Components/CompanyHero'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'

const Company = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full items-center flex justify-between flex-col'>
        <Navigation />
        <CompanyHero />
        <AboutUs />
        <OurServices />
    </div>
  )
}

export default Company