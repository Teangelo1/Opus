import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import StarsRating from 'stars-rating';

function Review(props) {
    const [starReview, setStarReview] = useState([])

    function ratingChanged() {
        setStarReview(starReview)
        console.log(starReview)
    }

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

                        <StarsRating
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />

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
