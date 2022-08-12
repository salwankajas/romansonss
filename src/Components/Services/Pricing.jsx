import React from 'react'

const Pricing = () => {
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Plan for you</h5>
                        {/* <!-- <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1> --> */}
                    </div>
                    <div className="row g-0">
                        <div className="basic col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="bg-light side-price-tag shadow rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">SILVER</h4>
                                    {/* <!-- <small className="text-uppercase">For Small Size Business</small> --> */}
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        {/* <!-- <small className="align-top" style="font-size: 22px; line-height: 45px;">$</small>49.00
                                        <small
                                            className="align-bottom" style="font-size: 16px; line-height: 40px;">/ Month</small> --> */}
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>Publishing with ISBN
                                    </span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Printing</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>No.of copies</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>No proof reading</span><i
                                        className="fa fa-times text-danger pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="gold col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="bg-white rounded shadow position-relative" style={{zIndex: "1"}}>
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">GOLD</h4>
                                    {/* <!-- <small className="text-uppercase">For Medium Size Business</small> --> */}
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        {/* <!-- <small className="align-top" style="font-size: 22px; line-height: 45px;">$</small>99.00
                                        <small
                                            className="align-bottom" style="font-size: 16px; line-height: 40px;">/ Month</small> --> */}
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>Silver Package +</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>DTP</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Layout</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cover Design</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Book distribution shop</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Social Media</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="platinum col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="bg-light side-price-tag shadow rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">PLATINUM</h4>
                                    {/* <!-- <small className="text-uppercase">For Large Size Business</small> --> */}
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        {/* <!-- <small className="align-top"
                                            style="font-size: 22px; line-height: 45px;">$</small>149.00<small
                                                className="align-bottom" style="font-size: 16px; line-height: 40px;">/ Month</small> --> */}
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>Gold Package +</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Book release event</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Interview</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Book fairs</span><i
                                        className="fa fa-check text-primary pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing