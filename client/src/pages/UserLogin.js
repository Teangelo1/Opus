import React, { useRef } from "react";
import Input from "../components/Input";
import { useUserContext } from "../utils/UserContext";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "../styles/userlogin.css";
import welcome from "../styles/assets/opuswelcome.png";

function UserLogin() {
    const [state, dispatch] = useUserContext()
    const emailRef = useRef()
    const passwordRef = useRef()
    function handleLogin(event) {
        event.preventDefault();
        let btn = document.getElementById("signin")
        let search = document.getElementById("search")
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        API.login(user).then((res) => {
            dispatch({
                type: "Login",
                user: res.data.id
            });
        })
            .then(
                btn.append("  Hooray! You're Logged in!"),
                search.append("  Get Reading! 📚🐛 ")
            )
    }
    return (
        <div className="row background">
            <Container>
                <form className="mainform" onSubmit={handleLogin}>
                    <Row>
                        <img className="welcome" alt="welcome" src={(welcome)}></img>
                    </Row>
                    <Input
                        ref={emailRef}
                        type="email"
                        name="email"
                        label="Email"
                    />
                    <Input
                        ref={passwordRef}
                        type="password"
                        name="password"
                        label="Password"
                    />
                    <Row>
                        <div className="col-2"></div>
                        <div className="col-8">
                            <button
                                type="submit"
                                className="btn btn-light"
                                id="signin"
                            >
                                Sign In 📚🐛
                                </button>
                            <div>
                                <Row><Link to="/search" id="search"></Link></Row>
                                <Row><Link to="/newuser" id="new">New User? Sign Up</Link></Row>
                                
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </Row>
                </form>
            </Container>
        </div>
    )
}
export default UserLogin;