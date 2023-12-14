import React from 'react'
import '../index.css'
import Navigation from '../Components/Navigation'
import ResourcesHero from '../Components/ResourcesHero'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'

const Resources = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full'>
      <Navigation />
      <ResourcesHero />
      <AboutUs />
      <OurServices />
    </div>
  )
}

export default Resources