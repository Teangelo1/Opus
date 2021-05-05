import React from 'react'
import {Row} from "react-bootstrap"

export default class Bookshelf extends React.Component {
    render(){
    return (
        <div>


{/* Currently Reading Section */}
    <Row>
    <div className="col-12">Currently Reading</div>
    </Row>  

    <Row>
    <div className="col-12">Book, Name current page here</div>
    </Row> 



{/* Want to Read Section */}
    <Row>
    <div className="col-12">Want to Read</div>
    </Row>  
    <Row>
    <div className="col-1"></div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-1"></div>
    </Row>  

{/* Suggestions for you... Section */}
    <Row>
    <div className="col-12">Suggestions for you...</div>
    </Row>  
    <Row>
    <div className="col-1"></div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-1"></div>
    </Row>  

{/* Read Section */}
    <Row>
    <div className="col-12">Read</div>
    </Row>  
    <Row>
    <div className="col-1"></div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-2">Book Here</div>
    <div className="col-1"></div>
    </Row>  

{/* search for more Section */}
<Row>

    </Row>  




    <Row></Row>









        </div>
    )
}}
