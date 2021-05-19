import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Row } from "react-bootstrap";
import Header from "../components/Navbar/navbar";
import BookDetail from "../components/BookDisplay";
import "../styles/opusleague.css";
import ClubComments from "../components/ClubComments"; 


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
                <Header />

                <Container>
                    {/* {books.length ? ( */}
                    <div>
                        <Row>

                            <BookDetail gID={"/details/9781501160851"} image={"http://books.google.com/books/content?id=AIjCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_ap"} />
                            <button className="btn btn-light" value={1} onClick={() => opusBookData(1)}>💰In Da Club🕵️‍♂️</button>
                            <BookDetail gID={"/details/9781501171345"} image={"http://books.google.com/books/content?id=3s8DEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                            <button className="btn btn-light" value={2} onClick={() => opusBookData(2)}>🕵️‍♀️In Da Club📝</button>
                            <BookDetail gID={"/details/9780765387585"} image={"http://books.google.com/books/content?id=vH3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                            <button className="btn btn-light" value={3} onClick={() => opusBookData(3)}>✨In Da Club🥀</button>
                              
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

                </Container>
            </div>
        </div>
    );
}


export default OpusLeague;