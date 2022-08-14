import React from 'react'
import './dist/style.css'
import YouTube from './dist/YouTube'
import GalleryProp from './GalleryProp'

const Gallery = () => {
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Gallery</h5>
                        {/* <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1> */}
                    </div>
                </div>
            </div>
            <div className="container1">

                <YouTube />

                <br />
                <br />


                <div className="gallery">

                    <GalleryProp image={require('./Inaugration/0.jpg')} />
                    <GalleryProp image={require('./Inaugration/1.jpg')} />
                    <GalleryProp image={require('./Inaugration/3.jpg')} />

                </div>

            </div>

            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Events</h5>
                        {/* <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1> */}
                    </div>
                </div>
            </div>
            <div className="container1">
                <div className="gallery">

                    <GalleryProp image={require('./Hariharan Event/0.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/1.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/2.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/3.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/4.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/5.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/6.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/7.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/8.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/9.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/10.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/12.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/13.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/14.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/15.jpg')} />
                    <GalleryProp image={require('./Hariharan Event/16.jpg')} />


                </div>
            </div>
        </div>
    )
}

export default Gallery