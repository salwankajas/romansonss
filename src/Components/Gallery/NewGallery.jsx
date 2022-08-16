import React from 'react'
import YouTube from './dist/YouTube'
import Slider from './Slider/Slider'

const NewGallery = () => {
    return (
        <div>

            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                
            </div>
            <div className="container1">
                <YouTube />
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Gallery</h5>
                    </div>
                </div>
                <Slider />

            </div>


        </div>
    )
}

export default NewGallery