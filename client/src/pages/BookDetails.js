import React, { useState, useEffect } from "react";
import BookCard from "../components/Bookcard";
import API from "../utils/API";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/Navbar/navbar";

function BookDetails() {
 const [books, setBooks] = useState([])
 const [user, setUser] = useState([]); 
 let {id} = useParams(); // useParams will always reference the id in our url

 useEffect(() => {
    loadBooks(id)
    getUser()
  }, [id])

  function getUser() {
    API.getUser().then(res => {
      setUser(res.data.id)
    })
  }
  
  function loadBooks(id) {
    API.testRoute(id)
      .then(res => {
        console.log(id)
        setBooks(res.data.items)
  }).catch(err => console.log(err));
  };
  
   
  function addBookRead(index) {
    console.log(user)
    API.saveBooks({
      book: { 
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.authors[0],
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
      isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
      img: books[index].volumeInfo.imageLinks.thumbnail,
      },
      userId: user,
      shelf: "Read"
    }).then(alert("You added " + books[index].volumeInfo.title + " to your Read Shelf"))
  }

  function addBookWant(index) {
      API.saveBooks({
        book: { 
        title: books[index].volumeInfo.title,
        author: books[index].volumeInfo.authors[0],
        genre: books[index].volumeInfo.genre,
        pages: books[index].volumeInfo.pageCount,
        isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
        img: books[index].volumeInfo.imageLinks.thumbnail,
        },
        userId: user,
      shelf: "Want to Read"
    }).then(alert("You added " + books[index].volumeInfo.title + " to your Want to Read Shelf"))
  }

  function addBookCurrent(index) {
    API.saveBooks({
      book: { 
      title: books[index].volumeInfo.title,
      author: books[index].volumeInfo.authors[0],
      genre: books[index].volumeInfo.genre,
      pages: books[index].volumeInfo.pageCount,
      isbn: books[index].volumeInfo.industryIdentifiers[0].identifier,
      img: books[index].volumeInfo.imageLinks.thumbnail,
      },
      userId: user,
      shelf: "Currently Reading"
    }).then(alert("You added " + books[index].volumeInfo.title + " to your Currently Reading Shelf"))
  }

  return (

<div>
    <Header></Header>
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
                  read={() => addBookRead(index)}
                  want={() => addBookWant(index)}
                  current={() => addBookCurrent(index)}
                />
              ))}
            </div>
          ) : (
            <h2 id="noBook">
            📚 Search a book from our Search Page 📚
            </h2>)}

    </Container>
    </div>
  );
}


export default BookDetails;