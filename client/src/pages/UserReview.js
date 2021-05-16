import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import Review from "../components/Review";
import StarsRating from 'stars-rating';
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
        console.log("changed")
        setStarReview(starReview)
        console.log(starReview)
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setReview(value);
    };

    function handleReviewSubmit(event) {
        event.preventDefault();
        console.log(starReview)
        console.log(bookReview)
        API.updateSaved({
            userId: 2,
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
                    //star={<StarsRating count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />}
                />
            )}
            <StarsRating
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} />         
        </Container>
    );
}


export default UserReview;