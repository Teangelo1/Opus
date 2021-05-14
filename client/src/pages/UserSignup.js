import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";

function UserSignup() {
    const [user, setUserData] = useState("")

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
        }).then(console.log(user))
 
    };

    return (
        <div>

            <form onSubmit={handleFormSubmit}>
                <Input
                    value={user.first_name}
                    onChange={handleInputChange}
                    type="text"
                    name="first_name"
                    label="First Name"
                />
                <Input
                    value={user.last_name}
                    onChange={handleInputChange}
                    type="text"
                    name="last_name"
                    label="Last Name"
                />
                <Input
                    value={user.email} // need to validate email somehow, so unique and email
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
                    Submit New User
            </button>
                <p>Returning User? Login</p>
            </form>

        </div>
    )
}

export default UserSignup;