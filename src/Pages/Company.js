import React from 'react'
import '../index.css'
import Navigation from '../Components/Navigation'
import CompanyHero from '../Components/CompanyHero'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'
import Footer from '../Components/Footer'
import CompanyFeatures from '../Components/CompanyFeatures'
import Iono from '../Components/Iono'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'
import '../index.css'
import ToolsAccess from '../Components/ToolsAccess'
import Partners from '../Components/Partners'

const Company = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full items-center'>
        <Navigation />
        <CompanyHero />
        <AboutUs />
        <OurServices />
        <CompanyFeatures />
        <ToolsAccess />
        <Iono />
        <Testimonials />
        <Newsletter />
        <Partners />
        <Footer />
    </div>
  )
}

export default Company