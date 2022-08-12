import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav style={{ backgroundColor: "rgba(250, 250, 250, 0.623)" }}
                className="navbar navbar-expand-lg navbar-dark px-4 py-3 py-lg-0">
                <div style={{width:"188px"}}>
                <a href="/" className="navbar-brand p-0">
                    {/* <!-- <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Startup</h1> --> */}
                    <img style={{maxWidth:"12rem"}} src="img/mine/romanson.png" alt="" />
                </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <NavLink to='/' reloadDocument className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link nav-link1")} onClick={()=>{window.location.href='/'}}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link nav-link1")}>About</NavLink>
                        <NavLink to='/services' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Services</NavLink>
                        <NavLink to='/testimonial' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Testimonials</NavLink>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Blog</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Contact</NavLink>
                        <NavLink to='/gallery' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Gallery</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Start Puglishing</a>
                            <div className="dropdown-menu m-0">
                                <a href="login" className="dropdown-item">Login</a>
                                <a href="signup" className="dropdown-item">SignUp</a>
                            </div>
                        </div>
                    </div>
                    {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal"
                        data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                </div>
            </nav>
        </div>
    )
}

export default Nav
