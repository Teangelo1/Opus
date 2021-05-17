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

    function ratingChanged1(e, book) {
        e.preventDefault()
        const btn = document.getElementById("star1")
        const label = document.getElementById("starRating")
        label.append(btn.value)
        setStarReview(btn.value)
        API.updateStar({
            userId: book.userId,
            bookId: book.bookId,
            rating: btn.value 
        })
    }
    function ratingChanged2(e, book) {
        e.preventDefault()
        const btn = document.getElementById("star2")
        const label = document.getElementById("starRating")
        label.append(btn.value)
        setStarReview(btn.value)
        API.updateStar({
            userId: book.userId,
            bookId: book.bookId,
            rating: btn.value 
        })
    }
    function ratingChanged3(e, book) {
        e.preventDefault()
        const btn = document.getElementById("star3")
        const label = document.getElementById("starRating")
        label.append(btn.value)
        setStarReview(btn.value)
        API.updateStar({
            userId: book.userId,
            bookId: book.bookId,
            rating: btn.value 
        })
    }
    function ratingChanged4(e, book) {
        e.preventDefault()
        const btn = document.getElementById("star4")
        const label = document.getElementById("starRating")
        label.append(btn.value)
        setStarReview(btn.value)
        API.updateStar({
            userId: book.userId,
            bookId: book.bookId,
            rating: btn.value 
        })
    }
    function ratingChanged5(e, book) {
        e.preventDefault()
        const btn = document.getElementById("star5")
        const label = document.getElementById("starRating")
        label.append(btn.value)
        setStarReview(btn.value)
        API.updateStar({
            userId: book.userId,
            bookId: book.bookId,
            rating: btn.value 
        })
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
        API.updateSaved({
            userId: book.userId,
            bookId: book.bookId,
            review: bookReview,
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
                    star1={(e) => ratingChanged1(e, book)}
                    star2={(e) => ratingChanged2(e, book)}
                    star3={(e) => ratingChanged3(e, book)}
                    star4={(e) => ratingChanged4(e, book)}
                    star5={(e) => ratingChanged5(e, book)}
                />
            )}
        
        </Container>
    );
}


export default UserReview;