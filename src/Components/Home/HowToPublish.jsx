import React from 'react'

const HowToPublish = () => {
    return (
        <div>

            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                        <h5 className="fw-bold text-primary text-uppercase">How to publish</h5>
                        {/* <!-- <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1> --> */}
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-shield-alt text-white"></i>
                                </div>
                                <h4 className="mb-3">Register</h4>
                                {/* <p className="m-0">Breif description</p > */}
                                <a className="btn btn-lg btn-primary rounded" href="login.html">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-chart-pie text-white"></i>
                                </div>
                                <h4 className="mb-3">Upload script in PDF</h4>
                                {/* <p className="m-0">Brief Description</p> */}
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-code text-white"></i>
                                </div>
                                <h4 className="mb-3">Choose Package</h4>
                                {/* <p className="m-0">Brief Description</p> */}
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div style={{opacity: "0"}} className="col-lg-4 col-md-6 wow zoomIn hide" data-wow-delay="0.6s">
                            <div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-chart-pie text-white"></i>
                                </div>
                                <h4 className="mb-3">Upload script in PDF</h4>
                                {/* <p className="m-0">Brief Description</p> */}
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fab fa-android text-white"></i>
                                </div>
                                <h4 className="mb-3">Your Book is Published</h4>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div style={{opacity: "0"}} className="col-lg-4 col-md-6 wow zoomIn hide" data-wow-delay="0.6s">
                            <div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-chart-pie text-white"></i>
                                </div>
                                <h4 className="mb-3">Upload script in PDF</h4>
                                {/* <p className="m-0">Brief Description</p> */}
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToPublish