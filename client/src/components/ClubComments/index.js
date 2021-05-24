import React from "react";
import { Row, Col } from "react-bootstrap";
import Stars from 'simple-rating-stars';

function ClubComments(props) {
    return (
        <div className="card">
            <div className="card-body">
                <Row>
                    <Col size="4">
                        <h2 id="user">{props.firstName} {props.lastName}</h2>
                        <button type="button" className="btn btn-light" disabled>Expand Your League</button>
                        <p>League Expansion  ...coming soon</p>
                    </Col>

                    <Col size="8">
                        <Stars
                            stars={props.stars}
                            outOf={5}
                            full={'#DEAD85'}
                            empty={'#E1F1FF'}
                            stroke={'#DEAD85'}
                        />
                        <p>{props.review}</p>
                    </Col>
                </Row>


            </div>
        </div>
    );
}

export default ClubComments;
