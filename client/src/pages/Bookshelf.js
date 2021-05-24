import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "../styles/bookshelf.css";
import BookDetail from '../components/BookDisplay'
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ReactTooltip from "react-tooltip";

function Bookshelf() {
  const [readBooks, setReadBooks] = useState([])
  const [wantBooks, setWantBooks] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  let { userId } = useParams();

  useEffect(() => {
    getReadBooks(userId)
    wantToReadBooks(userId)
    currentlyReading(userId)
  }, [userId])

  function getReadBooks(userId) {
    API.getReadBooks(userId).then(data => { return data }).then(res => setReadBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function wantToReadBooks(userId) {
    API.wantToReadBooks(userId).then(data => { return data }).then(res => setWantBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function currentlyReading(userId) {
    API.currentlyReading(userId).then(data => { return data }).then(res => setCurrentBooks(
      res.data
    )).catch(err => console.log(err))
  }
  return (

    <div className="bookshelfPage">
      <Navbar />
      <Row>
        <div className="col-1 sidebar"></div>
        <div className="col-10 transparent">

          {/* Currently Reading Section */}
          <form className="currentlyReadingForm">
            <Row className="currentlyreadingheader">
              <div className="col-12 subtitle" data-tip="📖">Currently Reading</div>
            </Row>
            <Row className="bookreadingrow">
              <div className="col-4"></div>
              <div className="col-4 favbook">
                {currentBooks.map((books) => (
                  <BookDetail
                    key={books.bookId}
                    image={books.Book.img}
                    gID={`/details/${books.Book.isbn}`} />
                ))}</div>

              <div className="col-4"></div>
            </Row>
          </form>
          {/* Want to Read Section */}
          <form className="currentlyReadingForm">
            <Row>
              <div className="col-12 subtitle" data-tip="📗">Want to Read</div>
            </Row>
            <div className="row books">
              {wantBooks.map((books) => (
                <BookDetail
                  key={books.bookId}
                  image={books.Book.img}
                  gID={`/details/${books.Book.isbn}`} />))}
            </div>
            {/* Read Section */}
          </form>
          <form className="currentlyReadingForm">
            <Row>
              <div className="col-12 subtitle" data-tip="📚">Read</div>
              <div className="row books">
                {readBooks.map((books) => (
                  <BookDetail
                    key={books.bookId}
                    image={books.Book.img}
                    gID={`/details/${books.Book.isbn}`} />))}
              </div>
            </Row>
          </form>

        </div>
        <div className="col-1 sidebar"></div>


      </Row>
      <ReactTooltip place="top" type="dark" effect="float" />
      <Footer />
    </div>
  )
}
export default Bookshelf