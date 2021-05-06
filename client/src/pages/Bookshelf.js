import React from 'react'
import {Row} from "react-bootstrap"
import "../styles/bookshelf.css"

export default class Bookshelf extends React.Component {
    render(){
    return (
        <div>


{/* Currently Reading Section */}
    <Row>
    <div className="col-12 pagetitle">Currently Reading</div>
    </Row>  

    <Row>
    <div className="col-12 aboutme">Book, Name current page here</div>
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
<Row>
{/* search for more goes here */}
    </Row>  




    <Row></Row>









        </div>
    )
}}
