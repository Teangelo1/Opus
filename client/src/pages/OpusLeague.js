import React, { useState, useEffect } from "react";
import { useHoverIntent } from 'react-use-hoverintent';
// import BookCard from "../components/Bookcard";
import API from "../utils/API";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/Navbar/navbar";
import BookDetail from "../components/BookDisplay";
import "../styles/opusleague.css"


function OpusLeague(props) {
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState([]);
    // const [isHovering, ref] = useHoverIntent({
    //     timeout: 100,
    //     sensitivity: 10,
    //     interval: 200,
    //   });
    // const opusLeague = [4, 5, 6];

    let { id } = useParams(); // useParams will always reference the id in our url

    useEffect(() => {
        loadBooks(id)
        getUser()
    }, [id])

    function getUser() {
        API.getUser().then(res => {
            setUser(res.data.id)
        })
    }

    function loadBooks(id) {
        API.testRoute(id)
            .then(res => {
                console.log(id)
                setBooks(res.data.items)
            }).catch(err => console.log(err));
    };


    function addToLeague(index) {
        API.saveBooks({
            book: {
                title: books[index].volumeInfo.title,
                author: books[index].volumeInfo.authors[0],
                genre: books[index].volumeInfo.genre,
                pages: books[index].volumeInfo.pageCount,
                isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
                img: books[index].volumeInfo.imageLinks.thumbnail,
            },
            bookId: books.id[4],
            shelf: "Want to Read"
        }).then(alert("You added " + books[index].volumeInfo.title + " to your Want to Read Shelf"))
    }

    return (
        <div className="league">
            <div>
                <Header></Header>
                
                <Container>
                    {/* {books.length ? ( */}
                    <div>
                    <Row>
                        
                        <BookDetail image={"http://books.google.com/books/content?id=AIjCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_ap"}  />
                        <BookDetail image={"http://books.google.com/books/content?id=3s8DEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                        <BookDetail image={"http://books.google.com/books/content?id=vH3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
                        
                    </Row>
                    </div>
                        {/* <BookCard
                    className="bookcard"
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      id={book.volumeInfo.industryIdentifiers[4].identifier}
                      key={book.volumeInfo.industryIdentifiers[0].identifier}
                      rating={book.volumeInfo.averageRating}
                      pages={book.volumeInfo.pageCount}
                      genre={book.volumeInfo.categories}
                      league={() => addToLeague(index)}
                    /> */}
                        {/* //   )} */}

                    {/* </div> */}
                    {/* //   : ( */}
                    {/* <h2 id="noBook">
                        📚 Search a book from our Search Page 📚
                </h2> */}
                    {/* )} */}

                </Container>
            </div>
        </div>
    );
}


export default OpusLeague;

// function to add to league, return will show 3 books hard code in 
// The Last Thing He Told Me[4], Invisible Life Of Addie LaRue[5], Anxious People[6] 
// do we want to add to league on all? 