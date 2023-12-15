import React from 'react'
import '../index.css'
import Hero from '../Components/Hero'
import Navigation from '../Components/Navigation'
import AboutUs from '../Components/AboutUs'
import OurServices from '../Components/OurServices'
import Features from '../Components/Features'
import Iono from '../Components/Iono'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'
import Partners from '../Components/Partners'
import Footer from '../Components/Footer'

const Products = () => {
  return (
    <div className='bg-[#FBFDFD] w-full h-full items-center'>
      <Navigation />
      <Hero />
      <AboutUs />
      <OurServices />
      <Features />
      <Iono />
      <Testimonials />
      <Newsletter />
      <Partners />
      <Footer />
    </div>
  )
}

export default Products