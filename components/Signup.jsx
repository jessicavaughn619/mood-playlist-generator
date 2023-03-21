import React from "react";
import Login from "./Login";

function Signup({ onLogIn }) {

    function handleSubmit(event) {
        event.preventDefault();
        onLogIn()
    }
    return (
        <div>
        <h2>Please sign up!</h2>
            <form onSubmit={handleSubmit}>
                <input>Name</input>
                <button>Submit</button>
            </form>
            <Login />
        </div>
    )
}

export default Signup;