import React from "react";
import { Row, Col } from "react-bootstrap";
import Stars from 'simple-rating-stars';

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
                </Row>

                <Row>
                    <Col size="8">
                        <Stars
                            stars={props.stars}
                            outOf={5}
                            full={'#d00'}
                            empty={'#E1F1FF'}
                            stroke={'#369'}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col size="4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="starRating" data-bs-toggle="dropdown" aria-expanded="false">
                                ⭐️ Rating
                             </button>
                            <div className="dropdown-menu" aria-labelledby="starRating">                                
                                <li><button className="dropdown-item" id="star1" type="button" value="1" onClick={props.star}>1</button></li>
                                <li><button className="dropdown-item" id="star2" type="button" value="2" onClick={props.star2}>2</button></li>
                                <li><button className="dropdown-item" id="star3" type="button" value="3" onClick={props.star3}>3</button></li>
                                <li><button className="dropdown-item" id="star4" type="button" value="4" onClick={props.star4}>4</button></li>
                                <li><button className="dropdown-item" id="star5" type="button" value="5" onClick={props.star5}>5</button></li>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col size="8">
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">What did you think of the book?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={props.onChange} rows="3" placeholder={props.placeholder}></textarea>
                        </div>
                        <button type="submit" className="btn" onClick={props.onClick}>
                            Save
                        </button>
                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Review;
