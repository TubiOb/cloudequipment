import React from 'react'
import '../index.css'
import Navigation from '../Components/Navigation'
import ResourcesHero from '../Components/ResourcesHero'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'
import Footer from '../Components/Footer'
import '../index.css'
import ResourceAccess from '../Components/ResourceAccess'
import ResourceFeatures from '../Components/ResourceFeature'
import Iono from '../Components/Iono'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'
import Partners from '../Components/Partners'

const Resources = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full items-center flex justify-between flex-col'>
      <Navigation />
      <ResourcesHero />
      <AboutUs />
      <OurServices />
      <ResourceAccess />
      <ResourceFeatures />
      <Iono />
      <Testimonials />
      <Newsletter />
      <Partners />
      <Footer />
    </div>
  )
}

export default Resources