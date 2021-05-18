import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import BookDetail from "../components/BookDisplay";
import '../styles/search.css';
import API from '../utils/API';
import SearchInput from "../components/SearchIndex/searchindex";
import Header from "../components/Navbar/navbar";
import { List, ListItem } from "../components/List";
import { Row } from "react-bootstrap";
import Footer from "../components/Footer";


function Search() {
  const [books, setBooks] = useState([])
  const [nyBooks, setNyBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === books.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? books.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

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
      .then(res => {
        let filtered = res.data.books.filter(book => book.volumeInfo.industryIdentifiers !== undefined) // filtering out books for now that does not have a isbn number
        setBooks(filtered)
      })
      .catch(err => console.log(err));
  };
  const slides = nyBooks.map((book) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={book.id}
      >

        <img src={book.book_image} alt={book.altText} />
        {/* <CarouselCaption captionText={book.caption} captionHeader={book.caption} /> */}
      </CarouselItem>
    );
  });
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
          </form>
        </div>

        <div className="col-2"></div>
      </Row>


      <div className="container">
        <div className="jumbotron">
          <h1>Trending Books</h1>
          <h3 id="trendingQoute">“Today a reader, tomorrow a leader.”</h3>
          <hr />
          <div>

          </div>

          {!nyBooks.length ? (
            <h2>No Trending Books available at this moment </h2>
          ) : 
          
          <div className= "trendingbooks">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
              <CarouselIndicators items={books} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            </div>

          }

        </div>



      </div>
      <Footer />
    </div>



  );

}


export default Search;

            // <div className="trendingbooks">
            //   {nyBooks.map((book) => (
            //     <BookDetail
            //       title={book.title}
            //       image={book.book_image}
            //       key={book.id}
            //       gID={`/details/${book.isbns[0].isbn13}`}
            //     />
            //   ))}
            // </div>