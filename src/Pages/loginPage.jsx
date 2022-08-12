import React, { useEffect } from 'react'
import LoginComp from "../Components/Login/login";
const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <LoginComp />
    )
}

export default Login;