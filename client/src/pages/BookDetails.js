import React, { useState, useEffect } from "react";
import BookCard from "../components/Bookcard";
import API from "../utils/API";
import { Container } from "react-bootstrap";

function BookDetails() {
 const [books, setBooks] = useState([])
  
  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.testRoute()
      .then(res =>
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };

  function addBook(index) {
    API.saveBooks({
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.author,
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
    })
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