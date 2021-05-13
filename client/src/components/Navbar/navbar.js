import React from "react";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./navbar.css"


export default class Header extends React.Component{


    render(){
        return(
    



<header>
<div className="row">
<div className="col-2 headerselectors"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Home</NavLink></div>


<div className="col-4"></div>




<div className="col-2 headerselectors"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/bookshelf"}
to = "/bookshelf" 
>My Bookshelf</NavLink></div>

<div className="col-2 headerselectors"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Search for New Books</NavLink></div>


<div className="col-2 headerselectors"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/account"}
to = "/account" 
>Account</NavLink></div>


</div>









</header>
    
    
    
    
    
    )}}