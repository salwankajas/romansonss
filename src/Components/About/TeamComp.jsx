import React from 'react';

const TeamComp =  ({name,image})=>{
    return(
        <div className="col-lg-11 wow" data-wow-delay="0.6s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={image} alt=""/>
                                        {/* <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i
                                                className="fab fa-twitter fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i
                                                className="fab fa-facebook-f fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i
                                                className="fab fa-instagram fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i
                                                className="fab fa-linkedin-in fw-normal"></i></a>
                                        </div> */}
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">{name}</h4>
                                    {/* <p className="text-uppercase m-0">Designation</p> */}
                                </div>
                            </div>
                        </div>
    )
}
export default TeamComp;