import React, { useState, useEffect } from "react";
//import {Col, Row} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import API from "../../utils/API";
import ReactTooltip from "react-tooltip";


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
                    data-tip="👀"
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/search"}
                    to="/search"
                >Search</NavLink></div>


                <div className="col-4"></div>


                <div className="col-2"><NavLink
                    data-tip= "📚"
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === `/bookshelf/${user}`}
                    to={`/bookshelf/${user}`}
                >My Bookshelf</NavLink></div>

                <div className="col-2"><NavLink
                    data-tip = "⭐️"
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === "/opusleague"}
                    to="/opusleague"
                >Opus League</NavLink></div>



                <div className="col-2"><NavLink
                    data-tip ="📝"
                    className="nav-link search headerselectors"
                    activeClassName="active"
                    isActive={() => window.location.pathname === `/reviews/${user}`}
                    to={`/reviews/${user}`}
                >My Reviews</NavLink></div>


            </div>








            <ReactTooltip place="top" type="dark" effect="float" />
        </header>





    )
}

export default Header;