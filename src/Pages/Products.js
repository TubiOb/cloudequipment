import React from 'react'
import '../index.css'
import Hero from '../Components/Hero'
import Navigation from '../Components/Navigation'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'

const Products = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full'>
      <Navigation />
      <Hero />
      <AboutUs />
      <OurServices />
    </div>
  )
}

export default Products