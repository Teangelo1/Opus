import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";

function UserLogin() {
    const [user, setUserData] = useState("")
    const [status, setStatus] = useState("New User")

    function changeState() {
        setStatus("Returning User")
        alert(status)
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({ ...user, [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.newUser({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
        }).then(() => setUserData({
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }))
    }

    function handleLogin(event) {
        event.preventDefault();
        API.login({
            email: user.email
        }).then(alert(user))
    }

    return (
        <div>

            <form onSubmit={handleFormSubmit}>
                <Input
                    value={user.first_name}
                    onChange={handleInputChange}
                    name="first_name"
                    label="First Name"
                />
                <Input
                    value={user.last_name}
                    onChange={handleInputChange}
                    name="last_name"
                    label="Last Name"
                />
                <Input
                    value={user.email} // need to validate email somehow, so unique and email
                    onChange={handleInputChange}
                    name="email"
                    label="Email"
                />
                <Input
                    value={user.password}
                    onChange={handleInputChange}
                    name="password"
                    label="Password"
                />
                <button
                    type="submit"
                    className="btn"
                >
                    Submit New User
            </button>
                <p onClick={changeState}>Returning User? Login</p>
            </form>

            
            {/* Some sort of switch needs to go here */}
            <form onSubmit={handleLogin}>
            <Input
                value={user.email}
                onChange={handleInputChange}
                name="email"
                label="Email"
            />
            <Input
                value={user.password}
                onChange={handleInputChange}
                name="password"
                label="Password"
            />
            <button
                type="submit"
                className="btn"
            >
                Login
            </button>
            </form>


        </div>
    )
}

export default UserLogin;