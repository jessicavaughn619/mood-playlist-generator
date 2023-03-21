import React, { useState } from "react";
import Login from "./Login";

function Signup({ onLogIn }) {
    const [formData, setFormData] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div>
        <h2>Please sign up!</h2>
            <form onSubmit={handleSubmit}>
                <input>Email</input>
                <input>Password</input>
                <button>Submit</button>
            </form>
            <Login />
        </div>
    )
}

export default Signup;