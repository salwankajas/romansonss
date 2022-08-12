import React, { useEffect } from 'react'
import Hero from '../Components/Explore/Hero'
import Nav from '../Components/Common/Nav'
import Footer from '../Components/Common/Footer'
import Calc from '../Components/Explore/Calc'

const ExplorePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Nav />
      <Hero />
      <Calc />
      <Footer />
    </div>
  )
}

export default ExplorePage