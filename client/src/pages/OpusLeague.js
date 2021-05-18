import React, { useState, useEffect } from "react";
// import { useHoverIntent } from 'react-use-hoverintent';
// import BookCard from "../components/Bookcard";
import API from "../utils/API";
import { Container, Row } from "react-bootstrap";
import Header from "../components/Navbar/navbar";
import BookDetail from "../components/BookDisplay";
import "../styles/opusleague.css";
import Review from "../components/Review"; 


function OpusLeague() {
    const [user, setUser] = useState([]);
    const [opusBook, setOpusData] = useState([]);
    // const [isHovering, ref] = useHoverIntent({
    //     timeout: 100,
    //     sensitivity: 10,
    //     interval: 200,
    //   });
    // const opusLeague = [4, 5, 6];

    useEffect(() => {
        getUser()
        opusBookData()
    }, [])

    function getUser() {
        API.getUser().then(res => {
            setUser(res.data.id)
        })
    }
    // when calling for book club books : API.opusLeague 
    function opusBookData() {
        API.opusLeague(1).then(res => {
            setOpusData(res.data)
            console.log(res.data)
        })
    }

    // function addToLeague(index) {
    //     API.saveBooks({
    //         book: {
    //             title: books[index].volumeInfo.title,
    //             author: books[index].volumeInfo.authors[0],
    //             genre: books[index].volumeInfo.genre,
    //             pages: books[index].volumeInfo.pageCount,
    //             isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
    //             img: books[index].volumeInfo.imageLinks.thumbnail,
    //         },
    //         bookId: books.id[4],
    //         shelf: "Want to Read"
    //     }).then(alert("You added " + books[index].volumeInfo.title + " to your Want to Read Shelf"))
    // }

    return (
        <div className="league">
            <div>
                <Header></Header>

                <Container>
                    {/* {books.length ? ( */}
                    <div>
                        <Row>

                            <BookDetail gID={"/details/9781501160851"} image={"http://books.google.com/books/content?id=AIjCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_ap"} />
                            <button className="btn btn-light" value={1} onClick={(e) => opusBookData(e)}>💰In Da Club🕵️‍♂️</button>
                            <BookDetail gID={"/details/9781501171345"} image={"http://books.google.com/books/content?id=3s8DEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                            <button className="btn btn-light" value={2} onClick={(e) => opusBookData(e)}>🕵️‍♀️In Da Club📝</button>
                            <BookDetail gID={"/details/9780765387585"} image={"http://books.google.com/books/content?id=vH3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                            <button className="btn btn-light" value={3} onClick={(e) => opusBookData(e)}>✨In Da Club🥀</button>
                              
                        </Row>

                    </div>

                    <div id="reviews">

                        {opusBook.map((book) =>
                            <Review
                                title={book.User.first_name} //firstname={book.User.first_name}
                                // lastname={book.User.last_name}
                                placeholder={book.review} //review={book.review}
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

// function to add to league, return will show 3 books hard code in 
// The Last Thing He Told Me[4], Invisible Life Of Addie LaRue[5], Anxious People[6] 
// do we want to add to league on all? 