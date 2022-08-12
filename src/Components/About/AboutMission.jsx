import React from 'react'

const AboutMission = () => {
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Mission</h5>
                        {/* <!-- <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1> --> */}
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                        style={{ width: "60px", height: "60px" }}>
                                        <i className="fa fa-cubes text-white"></i>
                                    </div>
                                    <h4>Mission</h4>
                                    <p className="mb-0">Our mission is to proclaim intellectual, literary and creative works and to
                                        support authors in
                                        their endeavour to give their best.</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                        style={{ width: "60px", height: "60px" }}>
                                        <i className="fa fa-award text-white"></i>
                                    </div>
                                    <h4>Vision</h4>
                                    <p className="mb-0">Our vision is to be a different className of publisher, solely publishing books
                                        that will help the readers to
                                        become better version of themselves and serve the society. We are a publishing company
                                        which captivate
                                        and fosters exceptional people.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                                    src="img/feature.jpg" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                        style={{ width: "60px", height: "60px" }}>
                                        <i className="fa fa-users-cog text-white"></i>
                                    </div>
                                    <h4>Core Values</h4>
                                    <br />
                                    <h5>Honesty</h5>
                                    <p className="mb-0">“Honesty is the best policy”. We publish and sell books of the highest
                                        quality in content and design. Our
                                        publisher author agreement protects both the parties against potential copyright
                                        infringement and unfair
                                        treatment.</p>
                                    <h5>Trust</h5>
                                    <p className="mb-0">Publishing industries are build on people- and that makes trust very
                                        important to the
                                        publishing
                                        process. We make every effort to build trusting relationships with our authors and
                                        clients.</p>
                                    <h5>Team Spirit</h5>
                                    <p className="mb-0">
                                        Spirit-we love to work as a team and are accountable for our work and keep our authors
                                        informed
                                        in each step of this publishing journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMission