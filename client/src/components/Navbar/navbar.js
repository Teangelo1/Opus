import React, { useState, useEffect } from "react";
//import {Col, Row} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import API from "../../utils/API";


function Header() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser()
    }, [])

    function getUser() {
        API.getUser().then(res => {
            setUser(res.data.id)
            console.log(user)
        })
    }

    return (

        <header>
            <div className="row headerrow">
                <div className="col-2"><NavLink
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/search"}
                    to="/search"
                >Home</NavLink></div>


                <div className="col-4"></div>


                <div className="col-2"><NavLink
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === `/bookshelf/${user}`}
                    to={`/bookshelf/${user}`}
                >My Bookshelf</NavLink></div>

                <div className="col-2"><NavLink
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/search"}
                    to="/search"
                >Search for Books</NavLink></div>

                <div className="col-2"><NavLink
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/account"}
                    to="/account"
                >Account</NavLink></div>

                <div className="col-2"><NavLink
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === `/reviews/${user}`}
                    to={`/reviews/${user}`}
                >My Reviews</NavLink></div>


            </div>









        </header>





    )
}

export default Header;