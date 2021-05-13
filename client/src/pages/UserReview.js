import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import StarsRating from 'stars-rating';
import { render } from 'react-dom';

function UserReview() {
 const [books, setBooks] = useState([])
 let {id} = useParams(); // useParams will always reference the id in our url

 useEffect(() => {
    loadBook(id)
  }, [])

  function loadBook(id) {
    API.returnSaved(id)
      .then(res => {console.log(res.data)
        setBooks(res.data)
  }).catch(err => console.log(err));
  };

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
 
  return (
    <Container>
    <Review
    title={books.title}
    authors={books.author}
    image={books.img}
    pages={books.pages}
    />
    <StarsRating
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />
    </Container>
  );
}


export default UserReview;