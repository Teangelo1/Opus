import React from "react";
import { Row, Col } from "react-bootstrap";
import "./bookcard.css"
function BookCard(props) {
  return (
    <div>
      <div className="card cardwhole" id={props.id}>
        <div className="card-body">
          <Row>
            <Col size="6">
              <h2 id="bookTitle columnleft">{props.title}</h2>
              <h3 id="bookAuth columnleft">{props.authors}</h3>

              <div className="columnleft">
              <img id="bookImg" src={props.image} className="img-fluid" alt="bookimg" />
              <p>Average Rating: {props.rating} /5</p>
              <p>{props.pages} pages</p>
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Add to your shelf! 
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button" value="read" onClick={props.read}>Read</button></li>
                    <li><button className="dropdown-item" type="button" value="want to read" onClick={props.want}>Want to Read</button></li>
                    <li><button className="dropdown-item" type="button" value="currently reading" onClick={props.current}>Currently Reading</button></li>
                  </div>
                </div>
                </div>
                {/* <button type="button" className="btn btn-info" value="read" onClick={props.read}>Read</button>
                <button type="button" className="btn btn-info" value="want to read" onClick={props.want}>Want to read</button>
                <button type="button" className="btn btn-info" value="currently reading" onClick={props.current}>Currently Reading</button> */}
              </div>
            </Col>
            <Col size="6">
              <p className="textbackground">{props.description}</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default BookCard;