import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import Review from "../components/Review";
import { useParams } from "react-router-dom";

function UserReview() {
    const [books, setBooks] = useState([])
    const [bookReview, setReview] = useState([])
    const [starReview, setStarReview] = useState([])
    
    let {userId} = useParams(); 

    useEffect(() => {
        userComplete(userId)
    }, [userId])

    function userComplete(userId) {
        console.log(userId)
        API.completeShelf(userId)
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            }).catch(err => console.log(err));
    };

    function ratingChanged() {
        const btn = document.getElementById('star1')
        console.log("changed " + btn.value)
        setStarReview(btn.value)
        console.log(starReview)
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setReview(value);
    };

    function handleReviewSubmit(e, book) {
        e.preventDefault()
        console.log(book.bookId)
        console.log(book.userId)
        console.log(bookReview)
        console.log(starReview)
        API.updateSaved({
            userId: book.userId,
            bookId: book.bookId,
            review: bookReview,
            rating: starReview
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
                    onClick={(e) => {handleReviewSubmit(e, book)}}
                    stars={book.rating}
                    star={() => ratingChanged()}
                    star2={(e) => ratingChanged(e)}
                    star3={(e) => ratingChanged(e)}
                    star4={(e) => ratingChanged(e)}
                    star5={(e) => ratingChanged(e)}
                />
            )}
        
        </Container>
    );
}


export default UserReview;