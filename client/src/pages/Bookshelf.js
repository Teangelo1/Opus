import React, { useState, useEffect, useContext } from "react";
import { Row } from "react-bootstrap";
import "../styles/bookshelf.css";
import BookDetail from '../components/BookDisplay'
// import Footer from "../components/Footer/footer";
import Header from "../components/Navbar/navbar";
import API from '../utils/API'
import { useUserContext, UserProvider } from "../utils/UserContext"; 

function Bookshelf() {
  const [nyBooks, setNyBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])
  const [wantBooks, setWantBooks] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [state, dispatch] = useUserContext()

  useEffect(() => {
    bookShelfData()
    getReadBooks()
    wantToReadBooks()
    currentlyReading()
  }, [])

  function bookShelfData() {
    console.log(state)
    API.bookShelfData().then(data => { console.log(data); return data }).then(res => setNyBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function getReadBooks() {
    API.getReadBooks().then(data => { console.log(data); return data }).then(res => setReadBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function wantToReadBooks() {
    API.wantToReadBooks().then(data => { console.log(data); return data }).then(res => setWantBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function currentlyReading() {
    API.currentlyReading().then(data => { console.log(data); return data }).then(res => setCurrentBooks(
      res.data
    )).catch(err => console.log(err))
  }

  return (
    <div>
      <Header></Header>

      {/* Currently Reading Section */}
      <Row className="currentlyreadingheader">
        <div className="col-12 subtitle">Currently Reading</div>
      </Row>

      <Row className="bookreadingrow">
        <div className="col-4"></div>
        <div className="col-2 favbook">{currentBooks.map((books) => (<BookDetail image={books.img} />))}</div>
        <div className="col-2 aboutme">Name current page here</div>
        <div className="col-4"></div>
      </Row>



      {/* Want to Read Section */}
      <Row>
        <div className="col-12 subtitle">Want to Read</div>
      </Row>
      <Row>

        {/* {!nyBooks.length ? 
(
<h2>No Trending Books available at this moment </h2>
) : */}
        {/* <div>
{nyBooks.map((books) => (
<BookDetail
  image={books.img}
  gID={`/review/${books.isbn}`}
/>
))}
</div> */}
        {/* } */}


      </Row>

      {/* Suggestions for you... Section */}

      <div className="row books">
        {wantBooks.map((books) => (<BookDetail image={books.img} gID={`/review/${books.isbn}`} />))}


      </div>

      {/* Read Section */}
      <Row>
        <div className="col-12 subtitle">Read</div>

        <div className="row book">
          {readBooks.map((books) => (<BookDetail image={books.img} />))}


        </div>
      </Row>
      <Row>
        <div className="col-1"></div>
        <div className="col-2 book">Book Here</div>
        <div className="col-2 book">Book Here</div>
        <div className="col-2 book">Book Here</div>
        <div className="col-2 book">Book Here</div>
        <div className="col-2 book">Book Here</div>
        <div className="col-1"></div>
      </Row>

    </div>
  )


}

export default Bookshelf