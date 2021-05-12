import React, { useState, useEffect } from "react";
import BookCard from "../components/Bookcard";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { List, ListItem } from "../components/List";

function BookDetails() {
  const [books, setBooks] = useState([])
  let { id } = useParams(); // useParams will always reference the id in our url

  useEffect(() => {
    loadBooks(id)
  }, [id])

  function loadBooks(id) {
    API.testRoute(id)
      .then(res => {
        console.log(id)
        setBooks(res.data.items)
      })
      .catch(err => console.log(err));
  };

  function addBookRead(index) {
    API.saveBooks({
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.authors[0],
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
      isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
      img: books[index].volumeInfo.imageLinks.thumbnail,
      shelf: "Read"
    }).then(alert("You added " + books[index].volumeInfo.title + " to your Read Shelf"))
  }

  function addBookWant(index) {
    API.saveBooks({
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.authors[0],
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
      isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
      img: books[index].volumeInfo.imageLinks.thumbnail,
      shelf: "Want to Read"
    }).then(alert("You added " + books[index].volumeInfo.title + " to your Want to Read Shelf"))
  }

  function addBookCurrent(index) {
    API.saveBooks({
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.authors[0],
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
      isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
      img: books[index].volumeInfo.imageLinks.thumbnail,
      shelf: "Currently Reading"
    }).then(alert("You added " + books[index].volumeInfo.title + " to your Currently Reading Shelf"))
  }

  return (
    <Container>
      {books.length ? (
        <List>

          {books.map((book, index) => (
            <ListItem key={book._id}>
              <BookCard
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                id={book.volumeInfo.industryIdentifiers[0].identifier} 
                // key={book.volumeInfo.industryIdentifiers[0].identifier}
                rating={book.volumeInfo.averageRating}
                pages={book.volumeInfo.pageCount}
                genre={book.volumeInfo.categories}
                read={() => addBookRead(index)}
                want={() => addBookWant(index)}
                current={() => addBookCurrent(index)}
              />
            </ListItem>

          ))}
        </List>
      ) : (
          <h2 id="noBook">
            📚 Search a book from our Search Page 📚
          </h2>)}
    </Container>
  );
}


export default BookDetails;