import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import StarsRating from 'stars-rating';
import { render } from 'react-dom';

function UserReview() {
    const [books, setBooks] = useState([])
    let { id } = useParams();
    const [bookReview, setReview] = useState([])
    const [starReview, setStarReview] = useState([])

    useEffect(() => {
        loadBook(id)
    }, [])

    function loadBook(id) {
        API.returnSaved(id)
            .then(res => {
                setBooks(res.data)
            }).catch(err => console.log(err));
    };

    const ratingChanged = (newRating) => {
        console.log(newRating)
        setStarReview(newRating)
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setReview(value);
      };

    function setInput(event){
        event.preventDefault();
        console.log(bookReview)
    }

      function handleReviewSubmit(event) {
        event.preventDefault();
        console.log(bookReview + " " +starReview)
        //   API.searchBooks(bookSearch)
        //     .then(res => { let filtered = res.data.items.filter(book => book.volumeInfo.industryIdentifiers != undefined) // filtering out books for now that does not have a isbn number
        //       setBooks(filtered)})
        //     .catch(err => console.log(err));
          
     };

    return (
        <Container>
            <Review
                title={books.title}
                authors={books.author}
                image={books.img}
                pages={books.pages}
                value={bookReview}
                onChange={handleInputChange}
                onClick={setInput}
            />
            <StarsRating
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} />

            <button type="submit" className="btn" onClick={handleReviewSubmit}>
                Save Book Review
            </button>
        </Container>
    );
}


export default UserReview;