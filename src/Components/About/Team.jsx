import React from 'react'
import { useEffect } from 'react'
import TeamComp from './TeamComp';
const Team = () => {
    useEffect(() => {
        var evt = document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
    }, []);
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Meet our Authors</h5>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                        <TeamComp name="Akhildev P" image={require("./dist/img/1.jpg")} />
                        <TeamComp name="Jaison Joseph Sajan" image={require("./dist/img/2.jpg")} />
                        <TeamComp name="DR.I G Shibi" image={require("./dist/img/3.jpg")} />
                        <TeamComp name="Dr. Shyni Thomas" image={require("./dist/img/4.jpg")} />
                        <TeamComp name="Santhosh Michael" image={require("./dist/img/5.jpg")} />
                        <TeamComp name="E A Karunagaran Nair" image={require("./dist/img/6.jpg")} />
                        <TeamComp name="Sanjeev Kalarikkathara" image={require("./dist/img/7.jpg")} />
                        <TeamComp name="Vipin Thomas" image={require("./dist/img/8.jpg")} />
                        <TeamComp name="Dr Sunitha" image={require("./dist/img/9.jpg")} />
                        <TeamComp name="Sandhya" image={require("./dist/img/10.jpg")} />
                        <TeamComp name="?" image={require("./dist/img/11.jpg")} />
                        <TeamComp name="Manjula Mampally" image={require("./dist/img/12.jpg")} />
                        <TeamComp name="Prof G. Gopalakrishnan" image={require("./dist/img/13.jpg")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team