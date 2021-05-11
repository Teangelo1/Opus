
import {Row} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import BookDetail from "../BookDisplay";
import './footer.css';
import API from '../../utils/API';
import Input from "../Input";



function Footer() {

 const [books, setBooks] = useState([])
  const [nyBooks, setNyBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")

  useEffect(() => {
    trendingBooks()
  }, [])

  function trendingBooks() {
    API.trendingBooks().then(data => { console.log(data); return data }).then(res => setNyBooks(
     res.data.results.books
    )).catch(err => console.log(err))
  } 

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
      API.searchBooks(bookSearch)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
 };

      
        return(
    
      <footer  style={{
        position: "fixed",
        bottom: "0",
        width: "100%"}} >
      <Row>

<div className="col-3"></div>

<div className="col-3">
                <Input
                name="bookSearch"
                value={bookSearch}
                onChange={handleInputChange}
                placeholder='“A room without books is like a body without a soul.”'
              />
              </div>
              
              <div className="col-3">
                <button
                  type="submit"
                  className="btn btn-dark btn-md"
                  id="search-btn"
                  onClick={event =>  window.location.href='/search'}
                 >
                  <span className=""></span> Find the Book for you
                </button>
              </div>
           

              {!books.length ? (<p>""</p>) : <div>
          {books.map((book, index) =>(
            <BookDetail
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            key={book.id}
            id={index}
            />
          ))}
          </div>
          }

              <div className="col-3"></div>
              </Row>
      </footer> 
    
    
    
    
    
    )}

    
      export default Footer