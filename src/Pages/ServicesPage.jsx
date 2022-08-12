import React, { useEffect } from 'react'
import Footer from '../Components/Common/Footer'
import Nav from '../Components/Common/Nav'
import Hero from '../Components/Services/Hero'
import More from '../Components/Services/More'
import Pricing from '../Components/Services/Pricing'

const ServicesPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Nav />
            <Hero />
            <Pricing />
            <More />
            <Footer />
        </div>
    )
}

export default ServicesPage