import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";

function UserLogin() {
    const [user, setUserData] = useState([])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({ ...user, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.newUser({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
        })
            .then(console.log(user))
            .then(() => setUserData({
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            }))

    }

    return (
        <div>
        <form>
            <Input
                onChange={handleInputChange}
                name="first_name"
                placeholder="First Name"
                defaultvalue={user.first_name}
            />
            <Input
                onChange={handleInputChange}
                name="last_name"
                placeholder="Last Name"
                defaultvalue={user.last_name}
            />
            <Input
                onChange={handleInputChange}
                name="Email"
                placeholder="Email"
                defaultvalue={user.email}
            />
            <Input
                onChange={handleInputChange}
                name="Password"
                placeholder="Password"
                defualtvalue={user.password}
            />
            <button
                  type="Submit New User"
                  className="btn "
                  id="search-btn"
                  onClick={handleFormSubmit}
            >
            Submit New User
            </button>
           
           </form>

        </div>
    )
}

export default UserLogin;