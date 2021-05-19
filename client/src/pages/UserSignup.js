import React, { useState } from "react";
import Input from "../components/Input";
import API from "../utils/API";
import { Link } from "react-router-dom"; 
import { createBrowserHistory } from "history";
import "../styles/userlogin.css";
import { Container, Row, Col } from "react-bootstrap";
import welcome from "../styles/assets/opuswelcome.png";

function UserSignup() {
    const [user, setUserData] = useState("")
    
    const history = createBrowserHistory({forceRefresh:true}); 

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
        }).then(history.push("/"))
 
    };

    return (
        <div>
            <form id="newUser" onSubmit={handleFormSubmit}>
            <Row>
                <img className="welcome" alt="welcome" src={(welcome)} />
            </Row>
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
                <Row><button
                    type="submit"
                    className="btn"
                    id="submit"
                >
                    Submit New User
            </button>
            </Row>
            <Row>
                <Link to="/" id="return">Returning User? Login</Link>
            </Row>
            </form>

        </div>
    )
}

export default UserSignup;