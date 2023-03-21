import React, { useState } from "react";
import Login from "./Login";

function Signup({ onLogIn }) {
    const [formData, setFormData] = useState("");

    function handleInputChange(event) {
        setFormData(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onLogIn(formData)
    }
    return (
        <div className="signup__container">
        <h2>Please sign up!</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}/>
                <input
                type="text"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}/>
                <input
                type="text"
                placeholder="Enter password again to confirm"
                value={formData.passwordConfirmation}
                onChange={handleInputChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup;