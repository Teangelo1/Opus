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
                <button type="button" className="btn" id="bookBtnView">
                  Read
                </button>
                <button type="button" className="btn" onClick={props.onClick} id="bookBtnAction">
                  Want To Read
                </button>
              </div>
            </Col>
          </Row>
          <Row>
          <Col size="4">
          <img id="bookImg" src={props.image} className="img-fluid" alt="bookimg" />
          <p>{props.rating}</p>
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