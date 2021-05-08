import React from 'react';
import {Row} from "react-bootstrap";
import "../styles/bookshelf.css";
import Footer from "../components/Footer/footer";
import Header from "../components/Navbar/navbar";

export default class Bookshelf extends React.Component {
    render(){
    return (
        <div>


<Header></Header>

{/* Currently Reading Section */}
    <Row>
    <div className="col-12 pagetitle">Currently Reading</div>
    </Row>  

    <Row>
    <div className="col-4"></div>
    <div className="col-2 favbook">Book Here</div>
    <div className="col-2 aboutme">Name current page here</div>
    <div className="col-4"></div>
    </Row> 



{/* Want to Read Section */}
    <Row>
    <div className="col-12 subtitle">Want to Read</div>
    </Row>  
    <Row>
    <div className="col-1"></div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-1"></div>
    </Row>  

{/* Suggestions for you... Section */}
    <Row>
    <div className="col-12 subtitle">Suggestions for you...</div>
    </Row>  
    <Row>
    <div className="col-1"></div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-1"></div>
    </Row>  

{/* Read Section */}
    <Row>
    <div className="col-12 subtitle">Read</div>
    </Row>  
    <Row>
    <div className="col-1"></div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-2 book">Book Here</div>
    <div className="col-1"></div>
    </Row>  

{/* search for more Section */}

{/* <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button  type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div> */}




{/* <Row>
<NavLink 
className="nav-link search"
activeClassName="active"
isActive={()=>window.location.pathname==="/search"}
to = "/search" 
>Search</NavLink>
    </Row>   */}




    <Row></Row>






<Footer/>


        </div>
    )
}}
