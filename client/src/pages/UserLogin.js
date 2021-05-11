import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";

function UserLogin() {

    const initial = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    }

    const [user, setUserData] = useState(initial)

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({ ...user, [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(user.first_name)
        API.newUser({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
        }).then(console.log(user))
        // .then(() => setUserData({
        //     first_name: "",
        //     last_name: "",
        //     email: "",
        //     password: ""
        // }))
    }

    // function handleLogin(event) {
    //     event.preventDefault();
    //     API.login({
    //         email: user.email
    //     })
    //         .then(console.log(user))
    // }


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
                    Submit New User
            </button>

{/* 
                <button
                    type="submit"
                    className="btn"
                    id="search-btn"
                    onClick={handleLogin}
                >
                    Login
            </button> */}


            </form>

        </div>
    )
}

export default UserLogin;