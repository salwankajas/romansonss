import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                                <h5 className="mb-0">We are in constant pursuit of making things better, so that our clients must be
                                    able to take pride in the high-quality
                                    work they get from here, to satisfy stated and implied needs.</h5>
                            </div>
                            <p className="mb-4">
                                With a Legacy of more than 6 decades, we are one of the
                                leading service providers for all your printing needs with
                                print options unlimited. Established in September 2018,
                                Romanson Printing and Publishing House Pvt,Ltd. Located at
                                the heart of the City of Kerala state India.
                                Insert location map] has now become a huge family that
                                is growing with every passing day and becoming best
                                book publisher in India.</p><br />
                            <p><a target="_blank" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.55980028005!2d76.7840786713698!3d8.500047496474371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658810071581!5m2!1sen!2sin">Romansons</a>  now become a huge family that


                                is growing with every passing day and becoming best
                                book publisher in India.</p><br />
                            <p> We are full-fledge publisher with state -of-the-art
                                infrastructure dedicated to assist authors at all stages of
                                their publishing journey, create a high-quality printed or
                                digital book that matches their vision of authors. With comprehensive editorial, design,
                                marketing,
                                production and distribution services, our authors have the support of an experienced publishing
                                team while
                                still retaining one of the highest royalty share of our business. We publish all genres and try
                                our best to get
                                our authors the unique opportunities to reach out to the widest possible range of readers.</p><br /><p>
                                We specialize in taking care of all your publication needs like book editing, book cover design,
                                compilation, book beautification, ISBN and marketing assistance to make sure you achieve the success you
                                deserve.
                            </p>
                            <div className="row g-0 mb-3">
                                {/* <!-- <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                            </div> -->
                            <!-- <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                            </div> --> */}
                            </div>
                            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                {/* <!-- <div className="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                                <i className="fa fa-phone-alt text-white"></i>
                            </div> -->
                            <!-- <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+012 345 6789</h4>
                            </div> --> */}
                            </div>
                            {/* <!-- <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a> --> */}
                        </div>
                        <div className="col-lg-5" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="img/about.jpg" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="col-lg-12 wow slideInUp" data-wow-delay="0.6s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.55980028005!2d76.7840786713698!3d8.500047496474371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658810071581!5m2!1sen!2sin"
                            frameBorder="0" style={{ minHeight: "350px", border: "0" }} allowFullScreen="" aria-hidden="false"
                            tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs