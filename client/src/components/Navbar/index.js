import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

function Navbar() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser()
    }, [])

    function getUser() {
        API.getUser().then(res => {
            setUser(res.data.id)
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
                >Search</NavLink></div>


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
                    isActive={() => window.location.pathname === "/opusleague"}
                    to="/opusleague"
                >Opus League</NavLink></div>

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

export default Navbar;