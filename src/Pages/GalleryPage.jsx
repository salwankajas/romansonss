import React, { useEffect } from 'react'
import Hero from '../Components/Gallery/Hero'
import Footer from '../Components/Common/Footer'
import Nav from '../Components/Common/Nav'
import Gallery from '../Components/Gallery/Gallery'
const GalleryPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Nav />
            <Hero />
            <Gallery />
            <Footer />
        </div>
    )
}

export default GalleryPage