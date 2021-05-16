import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import Review from "../components/Review";

function UserReview() {
    const [books, setBooks] = useState([])
    const [bookReview, setReview] = useState([])

    useEffect(() => {
        userComplete()
    }, [])

    function userComplete() {
        API.completeShelf()
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            }).catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { value } = event.target;
        setReview(value);
      };

      function handleReviewSubmit(event) {
        event.preventDefault();
        console.log(bookReview)
        API.updateSaved({
           review: bookReview
        })
          
     };

    return (
        <Container>
        {books.map((book) =>
            <Review
                title={book.Book.title}
                authors={book.Book.author}
                image={book.Book.img}
                pages={book.Book.pages}
                placeholder={book.review}
                value={bookReview}
                onChange={handleInputChange}
                onClick={handleReviewSubmit}
            />
        )}
        </Container>
    );
}


export default UserReview;