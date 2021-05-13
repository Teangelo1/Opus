import React from "react";
import { Row, Col } from "react-bootstrap";

function Review(props) {
    return (
        <div className="card" id={props.id}>
        <div className="card-body">
        
        <Row>
            <Col size="12">
              <h2 id="bookTitle">{props.title}</h2>
              <h3 id="bookAuth">{props.authors}</h3>
            </Col>
        </Row>
        <Row>
        <Col size="4">
         <img id="bookImg" src={props.image} className="img-fluid" alt="bookimg" />
         </Col>
         <Col size="8">
        
            <div className="form-group">
                <label for="exampleFormControlTextarea1">What did you think of the book?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn">
                Submit Review
            </button>
            </Col>
            </Row>
        </div>
        </div>
    );
}

export default Review;
  