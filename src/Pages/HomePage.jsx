import Footer from '../Components/Common/Footer'
import Nav from '../Components/Common/Nav'
import BookSlider from '../Components/Home/BookSlider'
import Hero from '../Components/Home/Hero'
import HowToPublish from '../Components/Home/HowToPublish'
import { useState, useEffect } from 'react'
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Nav />
      <Hero />
      <BookSlider />
      <HowToPublish />
      <Footer />
    </>
  )
}

export default HomePage