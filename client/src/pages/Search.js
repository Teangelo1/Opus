import React, { useState, useEffect } from "react";
import BookDetail from "../components/BookDisplay";
import '../styles/search.css';
import API from '../utils/API';
import SearchInput from "../components/SearchIndex/searchindex";
import Header from "../components/Navbar/navbar"; import { ListItem } from "../components/List";
import { Row } from "react-bootstrap";
import Footer from "../components/Footer";
import CarouselBooks from '../components/Carousel';
import ReactTooltip from "react-tooltip";


function Search() {
  const [books, setBooks] = useState([])
  const [nyBooks, setNyBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")

  useEffect(() => {
    trendingBooks()
  }, [])

  function trendingBooks() {
    API.trendingBooks().then(data => { return data }).then(res => setNyBooks(
      res.data.results.books
    )).catch(err => console.log(err))
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  function hideit() {
    let hide = document.querySelector(".carousel");
    hide.setAttribute("id", "hideit")
  }


  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(event);
    hideit()


    API.searchBooks(bookSearch)
      .then(res => {
        let filtered = res.data.items.filter(book => book.volumeInfo.industryIdentifiers !== undefined) // filtering out books for now that does not have a isbn number
        setBooks(filtered)
      })
      .catch(err => console.log(err));
  };

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
                          data-tip="📚🐛 "
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

                  {books.map((book, index) => (
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
          </form>
        </div>

        <div className="col-2"></div>
      </Row>


      <div className="container">
        <div className="jumbotron">
          <h1>Trending Books</h1>

          <CarouselBooks id="" className="carousel" />

          <br />
          
          <div>
          </div>
        </div>
      </div>
      <ReactTooltip place="top" type="dark" effect="float" />
      <Footer />
    </div>

  );

}


export default Search;

