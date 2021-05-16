import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "../styles/bookshelf.css";
import BookDetail from '../components/BookDisplay'
import Header from "../components/Navbar/navbar";
import API from "../utils/API"; 
import { useParams } from "react-router-dom";


function Bookshelf() {
  // const [nyBooks, setNyBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])
  const [wantBooks, setWantBooks] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  let {userId} = useParams(); 

  useEffect(() => {
   // bookShelfData()
    getReadBooks(userId)
    wantToReadBooks(userId)
    currentlyReading(userId)
  }, [])

  // function bookShelfData() {
  //   API.bookShelfData().then(data => { console.log(data); return data }).then(res => setNyBooks(
  //     res.data
  //   )).catch(err => console.log(err))
  // }

  function getReadBooks(userId) {
    API.getReadBooks(userId).then(data => { console.log(data); return data }).then(res => setReadBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function wantToReadBooks(userId) {
    API.wantToReadBooks(userId).then(data => { console.log(data); return data }).then(res => setWantBooks(
      res.data
    )).catch(err => console.log(err))
  }

  function currentlyReading(userId) {
    API.currentlyReading(userId).then(data => { console.log(data); return data }).then(res => setCurrentBooks(
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
        <div className="col-2 favbook">{currentBooks.map((books) => (<BookDetail image={books.Book.img} />))}</div>
        <div className="col-4"></div>
      </Row>



      {/* Want to Read Section */}
      <Row>
        <div className="col-12 subtitle">Want to Read</div>
      </Row>
     
      {/* Suggestions for you... Section */}

      <div className="row books">
        {wantBooks.map((books) => (<BookDetail image={books.Book.img} gID={`/review/${books.isbn}`} />))}


      </div>

      {/* Read Section */}
      <Row>
        <div className="col-12 subtitle">Read</div>

        <div className="row book">
          {readBooks.map((books) => (<BookDetail image={books.Book.img} />))}

        </div>
      </Row>


    </div>
  )


}

export default Bookshelf