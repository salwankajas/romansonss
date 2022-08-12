import React, { useEffect } from 'react'
import Hero from '../Components/Testimonials/Hero'
import Footer from '../Components/Common/Footer'
import Nav from '../Components/Common/Nav'
import Testimonials from '../Components/Testimonials/Testimonials'

const TestimonialPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Nav />
      <Hero />
      <Testimonials />
      <Footer />
    </>
  )
}

export default TestimonialPage