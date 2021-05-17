import React, { useRef } from "react";
import Input from "../components/Input";
import { useUserContext } from "../utils/UserContext"; 
import API from "../utils/API";
import { Link } from "react-router-dom"; 
// import { createBrowserHistory } from "history"; 
import { Container } from "react-bootstrap";


function UserLogin() {
    const [state, dispatch] = useUserContext()
    const emailRef = useRef()
    const passwordRef = useRef()

    // const history = createBrowserHistory({forceRefresh: true}); 

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
        <div>
        <Container>
            <form onSubmit={handleLogin}>
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
            </form>
        </Container>

        </div>
    )
}

export default UserLogin;