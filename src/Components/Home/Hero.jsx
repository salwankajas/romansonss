import React, { useEffect } from 'react';

const Hero = () => {
    return (
        <div>
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="img/carousel-1.jpg" alt="" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                {/* <img width="50%" src="img/mine/romanson.png" alt="" /> */}
                                {/* <!-- <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> --> */}
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Unwavering Excellence
                                    In Printing And Publishing</h1>
                                <a href="about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read
                                    more</a>
                                <a href="contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                    Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                {/* <!-- <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> --> */}
                                {/* <img width="50%" src="img/mine/romanson.png" alt="" /> */}
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Unwavering Excellence
                                    In Printing And Publishing</h1>
                                <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read
                                    More</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                    Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Hero