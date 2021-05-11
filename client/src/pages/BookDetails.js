import React, { useState, useEffect } from "react";
import BookCard from "../components/Bookcard";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function BookDetails() {
 const [books, setBooks] = useState([])
 let {id} = useParams(); // useParams will always reference the id in our url
  useEffect(() => {
    loadBooks(id)
  }, [])

  function loadBooks(id) {
    API.testRoute(id)
      .then(res => {console.log(id)
        setBooks(res.data.items)
  })
      .catch(err => console.log(err));
  };

  function addBook(index) {
    API.saveBooks({
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.author,
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
    }).then(alert("added " + books[index].volumeInfo.title))
  }
 
  return (
    <Container>
    {books.length ? (
            <div>
              {books.map((book, index) => (

                <BookCard
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  id={book.volumeInfo.industryIdentifiers[0].identifier}
                  key={book.volumeInfo.industryIdentifiers[0].identifier}
                  rating={book.volumeInfo.averageRating}
                  pages={book.volumeInfo.pageCount}
                  genre={book.volumeInfo.categories}
                  onClick={() => addBook(index)}
                />
              ))}
            </div>
          ) : (
            <h2 id="noBook">
            📚 You have no shelved books 📚
            </h2>)}
    </Container>
  );
}


export default BookDetails;