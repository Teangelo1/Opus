import React, { useState, useEffect } from "react";
import BookDetail from "../components/BookDisplay";
import '../styles/search.css';
import API from '../utils/API';
import Input from "../components/Input";
import Header from "../components/Navbar/navbar";
import { List, ListItem } from "../components/List";

function Search() {
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
        .then(res => { let filtered = res.data.items.filter(book => book.volumeInfo.industryIdentifiers != undefined) // filtering out books for now that does not have a isbn number
          setBooks(filtered)})
        .catch(err => console.log(err));
      
 };

  return (




    <div>

<Header></Header>
      <div className="container search-content">
        <div className="row">
          <div className="col-12">
            <div>
              <h1><strong>Opus</strong></h1>
            </div>
            <div className="card-body">


<div className="row searchrow">
              <Input
                name="bookSearch"
                value={bookSearch}
                onChange={handleInputChange}
                type="text"
                placeholder='“A room without books is like a body without a soul.”'
              />

          


          
              <div className="col-3 btncol">
                <button
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

          {/* {!books.length ? (<p>""</p>) : <List> */}
          {books.map((book, index) =>(
            // console.log(book.volumeInfo.industryIdentifiers)
            <ListItem key={book.id}>
            <BookDetail
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            li key={book.id}
            id={index}
            gID={`/details/${book.volumeInfo.industryIdentifiers[0].identifier}`}
            />
            </ListItem>
          ))}
          {/* </List> */}
          {/* } */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="jumbotron">
          <h1>Trending Books</h1>
          <h3 id="trendingQoute">“Today a reader, tomorrow a leader.”</h3>
          <hr />
          {/* <div>We want to display data here</div> */}
          {!nyBooks.length ? (
            <h2>No Trending Books available at this moment </h2>
          ) :
            <div className="trendingbooks">
              {nyBooks.map((book) => (
                <BookDetail
                  title={book.title}
                  image={book.book_image}
                  key={book.id}
                  gID={`/details/${book.isbns[0].isbn13}`}
                />
              ))}

            </div>
          }

        </div>



      </div>
    </div>



  );

}


export default Search;

