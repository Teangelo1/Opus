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
              <h2 id="columnleft" className="bookTitle ">{props.title}</h2>
              <h3 id="columnleft" className="bookAuth">{props.authors}</h3>

              <div className="columnleft">
                <img id="bookImg" src={props.image} className="img-fluid" alt="bookimg" />
                <p>Average Rating: {props.rating} /5</p>
                <p>{props.pages} pages</p>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle detailbutton" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    〖 You can be Shelf-ish here, we don't mind 〗
                  </button>
                  <br></br>
                  <button className="btn btn-light detailbutton" type="button" id="leagueAdd" data-bs-toggle="button" aria-expanded="false" disabled>
                    ☆ League Worthy Add ☆
                  </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><button className="dropdown-item" type="button" value="read" onClick={props.read}>Read</button></li>
                      <li><button className="dropdown-item" type="button" value="want to read" onClick={props.want}>Want to Read</button></li>
                      <li><button className="dropdown-item" type="button" value="currently reading" onClick={props.current}>Currently Reading</button></li>
                    </div>
                  </div>
                </div>
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