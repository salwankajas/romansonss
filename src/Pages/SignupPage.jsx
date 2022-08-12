import React, { useEffect } from "react";
import SignupComp from "../Components/Login/Signup";
const Signup = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <SignupComp />
    )
}

export default Signup;