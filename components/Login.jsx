import React from "react";
import Landing from "./landing/Landing"
import Signup from "../components/Signup"

function Login({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? 
            <Landing /> :
            <Signup />}
        </div>
    )
}

export default Login;