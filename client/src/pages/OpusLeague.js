import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import BookDetail from "../components/BookDisplay";
import "../styles/opusleague.css";
import ClubComments from "../components/ClubComments";
import ReactTooltip from "react-tooltip";


function OpusLeague() {
    const [user, setUser] = useState([]);
    const [opusBook, setOpusData] = useState([]);

    useEffect(() => {
        getUser()
        opusBookData()
    }, [])

    function getUser() {
        API.getUser().then(res => {
            setUser(res.data.id)
        })
    }

    function opusBookData(bookId) {
        console.log("button value " + bookId)
        API.opusLeague(bookId).then(res => {
            setOpusData(res.data)
        })
    }

    return (
        <div className="league">
            <div>
                <Navbar />

                <Container>
                    {/* {books.length ? ( */}
                    <div>
                        <Row>

                            <div className="col-4">  <BookDetail gID={"/details/9781501160851"} image={"http://books.google.com/books/content?id=AIjCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_ap"} />
                                <button className="btn btn-light daclub" value={1} onClick={() => opusBookData(1)} data-tip="What's the League saying?">💰In Da Club🕵️‍♂️</button></div>
                            <div className="col-4"> <BookDetail gID={"/details/9781501171345"} image={"http://books.google.com/books/content?id=3s8DEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                                <button className="btn btn-light daclub" value={2} onClick={() => opusBookData(2)} data-tip="Discover why League members love this one!">🕵️‍♀️In Da Club📝</button></div>
                            <div className="col-4"><BookDetail gID={"/details/9780765387585"} image={"http://books.google.com/books/content?id=vH3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                                <button className="btn btn-light daclub" value={3} onClick={() => opusBookData(3)} data-tip="See what the League is talking about...">✨In Da Club🥀</button></div>

                        </Row>

                    </div>

                    <div id="reviews">

                        {opusBook.map((book) =>
                            <ClubComments
                                firstName={book.User.first_name}
                                lastName={book.User.last_name}
                                review={book.review}
                                stars={book.rating}
                            />
                        )}

                    </div>
                    <ReactTooltip place="top" type="dark" effect="float" />
                </Container>
            </div>
        </div>
    );
}


export default OpusLeague;