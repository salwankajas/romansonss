import React, { useEffect } from 'react'
import Blog from '../Components/Blogs/Blog'
import Hero from '../Components/Blogs/Hero'
import Footer from '../Components/Common/Footer'
import Nav from '../Components/Common/Nav'

const BlogPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Nav />
      <Hero />
      <Blog />
      <Footer />
    </div>
  )
}

export default BlogPage