import React, { useState } from "react";
import Landing from "./landing/Landing"
import Signup from "../components/Signup"

function Login({ isLoggedIn, onLogIn }) {
    const [formData, setFormData] = useState("");

    function handleInputChange(event) {
        setFormData(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        onLogIn(formData)
    }

    return (
        <div className="login__container">
            {isLoggedIn ? 
            <Landing /> :
            <form className="login_form"
            onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button>Login</button>
            </form>}
        </div>
    )
}

export default Login;