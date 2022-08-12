import React, { useEffect } from 'react'
import Contact from '../Components/Contact/Contact'
import Hero from '../Components/Contact/Hero'
import Nav from '../Components/Common/Nav'
import Footer from '../Components/Common/Footer'

const ContactUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Nav />
      <Hero />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactUsPage