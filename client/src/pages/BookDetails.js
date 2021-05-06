import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookCard from "../components/Bookcard";
import Button from "../components/Button";
import Input from "../components/Input";

function Search() {

  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
      API.googleBooks(bookSearch)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
 };

 function addBook(index) {
   console.log(books); 
   // look up which book based on the index of the array I searched 
   // save based on the index, and book I searched 
   API.saveBook({
     authors: books[index].volumeInfo.authors,
     description: books[index].volumeInfo.description,
     image: books[index].volumeInfo.imageLinks.smallThumbnail,
     link: books[index].volumeInfo.previewLink,
     title: books[index].volumeInfo.title,
   })
   .then(alert(`You added the book ` + books[index].volumeInfo.title + ` by` + books[index].volumeInfo.authors + ` to your shelf!`))
   
 }
 
  return (
    <Container fluid>
      <Row>
        <Col size="10">
          <Input 
          name="bookSearch"
          value={bookSearch}
          onChange={handleInputChange}
          placeholder="Search book title or author"
          />
        </Col>
        <Col size="2">
        <Button 
          onClick={handleFormSubmit}
          type="success"
          className="input-lg"
        >
        Search
        </Button>
        </Col>
      </Row>
      {!books.length ? (
        <h2 id="noBook"> 📚 Look up a book 📚 </h2>
       ) :
        <div>
          {books.map((book, index) => (
            <BookCard
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.smallThumbnail}
              key={book.id}
              id={index} // array index number 
              action={"Add"}
              onClick={() => addBook(index)}
              link={book.volumeInfo.previewLink}
            />
          ))}

        </div>
      }
    </Container>
  );
}


export default Search;