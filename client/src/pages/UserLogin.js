import React, { useRef } from "react";
import Input from "../components/Input";
import { useUserContext } from "../utils/UserContext";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/userlogin.css";
import welcome from "../styles/assets/opuswelcome.png";

function UserLogin() {
    const [state, dispatch] = useUserContext()
    const emailRef = useRef()
    const passwordRef = useRef()
    function handleLogin(event) {
        event.preventDefault();
        console.log(emailRef.current.value + " " + passwordRef.current.value)
        let btn = document.getElementById("signin")
        let search = document.getElementById("search")
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        API.login(user).then((res) => {
            console.log(res.data)
            console.log(user)
            dispatch({
                type: "Login",
                user: res.data.id
            });
        })
            .then(
                btn.append("Hooray! You're Logged in!"),
                search.append("Get Reading! 📚🐛 ")
            )
    }
    return (
        <div className="row background">
            <Container>
                <form className="mainform" onSubmit={handleLogin}>
                    <Row>
                        <Col className="col-2"></Col>
                        <Col className="col-8 imgcenter"><img className="welcome" alt="welcome" src={(welcome)}></img></Col>
                        <Col className="col-2"></Col>
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
                    {/* <form> thisform tag cannot exist it breaks the logic of the sign in */}
                    <Row>
                        <div className="col-2"></div>
                        <div className="col-8">
                            <button
                                type="submit"
                                className="btn"
                                id="signin"
                            >
                                Sign In 📚🐛
                                </button>
                            <div>
                                <Link to="/newuser">New User? Sign Up</Link>
                                <Link to="/search" id="search"></Link>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </Row>
                    {/* // </form> */}
                </form>
            </Container>
        </div>
    )
}
export default UserLogin;