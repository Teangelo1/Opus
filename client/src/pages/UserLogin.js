import React, { useRef } from "react";
import Input from "../components/Input";
import { useUserContext, UserProvider } from "../utils/UserContext"; 
import API from "../utils/API";

function UserLogin() {
    const [state, dispatch] = useUserContext()
    const emailRef = useRef()
    const passwordRef = useRef()

    function handleLogin(event) {
        event.preventDefault();
        console.log(emailRef.current.value + " " + passwordRef.current.value)
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        API.login(user).then((res) => {
            console.log(res)
            dispatch({
                type: "Login",
                user: res.data
            });
        }
        )
    }

    return (
        <div>
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
                >
                    Login
                </button>
            </form>

        </div>
    )
}

export default UserLogin;