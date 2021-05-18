import React, { useState, useEffect } from "react";

import BookDetail from "../components/BookDisplay";
import '../styles/search.css';
import API from '../utils/API';
import SearchInput from "../components/SearchIndex/searchindex";
import Header from "../components/Navbar/navbar";
import { List, ListItem } from "../components/List";
import { Row } from "react-bootstrap";
import Footer from "../components/Footer";
// import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip"
import CarouselBooks from "../components/Carousel/index"


function Search() {
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")

  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value);
    setBookSearch(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event);
   
    API.searchBooks(bookSearch)
      .then(res => {    console.log(res);
        let filtered = res.data.items.filter(book => book.volumeInfo.industryIdentifiers !== undefined) // filtering out books for now that does not have a isbn number
        setBooks(filtered)
     
      })
      .catch(err => console.log(err));
  };
  console.log(books);


  return (
    <div className="searchPage">

      <Header />
      <Row className="opusmain">
        <div className="col-2"></div>
        <div className="col-8 opusheader">

          <form>
            <div className="container search-content">
              <div className="row">
                <div className="col-12 opusbackground">
                  <div>
                    <h1 className="opusTitle">Opus</h1>
                  </div>
                  <div className="card-body">


                    <div className="row searchrow">

                      <SearchInput
                        name="bookSearch"
                        value={bookSearch}
                        onChange={handleInputChange}
                        type="text"
                        placeholder='“A room without books is like a body without a soul.”'
                      />


                      <div className="col-3 btncol">
                        <button
                          data-tip="🐛"
                          type="submit"
                          className="btn btn-dark btn-md"
                          id="search-btn"
                          onClick={handleFormSubmit}
                        >
                          <span className=""></span> Find the Book for you
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-2"></div>
      </Row>


      <div className="container">
        <div className="jumbotron">
          <h1>Trending Books</h1>
  
          
          <br />
          <div>
          <CarouselBooks />
          </div>

        <div>   
          {books.map((book, index) => (
                    
                    // console.log(book.volumeInfo.industryIdentifiers)
                    <ListItem key={book.id}>
                      <BookDetail
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        key={book.id}
                        id={index}
                        gID={`/details/${book.volumeInfo.industryIdentifiers[0].identifier}`}
                      />
                    </ListItem>
                  ))}
          </div>  
        </div>
      </div>
    
      <ReactTooltip place="top" type="dark" effect="float" />
      <Footer />
    </div>



  );

}


export default Search;
