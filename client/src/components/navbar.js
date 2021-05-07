import React from "react";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../styles/footer.css"


export default class Footer extends React.Component{


    render(){
        return(
    
<header>

<div className="col-2"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Search</NavLink></div>


<div className="col-4"></div>


<div className="col-2"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Search</NavLink></div>


<div className="col-2"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Search</NavLink></div>


<div className="col-2"><NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Search</NavLink></div>












</header>
    
    
    
    
    
    )}}