import React from 'react'
import '../index.css'
import Navigation from '../Components/Navigation'
import ResourcesHero from '../Components/ResourcesHero'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'
import Footer from '../Components/Footer'
import '../index.css'

const Resources = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full items-center flex justify-between flex-col'>
      <Navigation />
      <ResourcesHero />
      <AboutUs />
      <OurServices />
      <Footer />
    </div>
  )
}

export default Resources