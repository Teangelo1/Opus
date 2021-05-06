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

//   function deleteBook(id) {
//     API.getBooks(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }
 
  return (
    <Container>
    {books.length ? (
            <div>
              {books.map(book => (
                <BookCard
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  id={book.volumeInfo.industryIdentifiers[0].identifier}
                  key={book.volumeInfo.industryIdentifiers[0].identifier}
                  rating={book.volumeInfo.averageRating}
                  pages={book.volumeInfo.pageCount}
                  genre={book.volumeInfo.categories} // may be problematic, doesnt go deeper than fiction non fiction
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