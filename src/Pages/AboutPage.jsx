import React, { useEffect } from 'react'
import AboutMission from '../Components/About/AboutMission'
import AboutUs from '../Components/About/AboutUs'
import Hero from '../Components/About/Hero'
import Team from '../Components/About/Team'
import Footer from '../Components/Common/Footer'
import Nav from '../Components/Common/Nav'

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Nav />
            <Hero />
            <AboutUs />
            <AboutMission />
            <Team />
            <Footer />
        </div>
    )
}

export default AboutPage