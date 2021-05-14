import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";

function UserLogin() {
    const [user, setUserData] = useState("")

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({ ...user, [name]: value })
    }

    function handleLogin(event) {
        event.preventDefault();
        console.log(user)
        API.login(user)
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <Input
                    value={user.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    label="Email"
                />
                <Input
                    value={user.password}
                    onChange={handleInputChange}
                    type="password"
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