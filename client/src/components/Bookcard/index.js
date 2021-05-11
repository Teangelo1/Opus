import React from "react";
import { Row, Col } from "react-bootstrap";

function BookCard(props) {
  return (
    <div>
      <div className="card" id={props.id}>
        <div className="card-body">
          <Row>
            <Col size="9">
              <h2 id="bookTitle">{props.title}</h2>
              <h3 id="bookAuth">{props.authors}</h3>
            </Col>
            <Col size="3">
              <div>
                {props.onClick}

                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Add to your shelf! 
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button">Read</button></li>
                    <li><button className="dropdown-item" type="button">Want to Read</button></li>
                    <li><button className="dropdown-item" type="button">Currently Reading</button></li>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <img id="bookImg" src={props.image} className="img-fluid" alt="bookimg" />
              <p>Average Rating: {props.rating} /5</p>
              <p>{props.pages} pages</p>
            </Col>
          </Row>
          <Row>
            <Col size="8">
              <p>{props.description}</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default BookCard;