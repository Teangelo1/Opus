import React, { useRef } from "react";
import Input from "../components/Input";
import { useUserContext, UserProvider } from "../utils/UserContext"; 
import API from "../utils/API";

function UserLogin() {
    const [state, dispatch] = useUserContext()
    const emailRef = useRef(null)
    const passwordRef = useRef()

    function handleLogin(event) {
        event.preventDefault();
        console.log(emailRef.current.value)
        API.login(emailRef.current.value).then((res) => {
            console.log(res)
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