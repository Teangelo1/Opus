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
    getReadBooks(userId)
    wantToReadBooks(userId)
    currentlyReading(userId)
  }, [])

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
          
          <div className="bookshelfPage">
          <Header></Header>
          <Row>
  <div className="col-1 sidebar"></div>
  <div className="col-10 transparent">

                {/* Currently Reading Section */}
                <form className="currentlyReadingForm">
                <Row className="currentlyreadingheader">
                    <div className="col-12 subtitle">Currently Reading</div>
                </Row>
                <Row className="bookreadingrow">
                    <div className="col-4"></div>
                    <div className="col-4 favbook">{currentBooks.map((books) => (<BookDetail image={books.Book.img} />))}</div>

                    <div className="col-4"></div>
                </Row>
                </form>
                {/* Want to Read Section */}
                <form className="currentlyReadingForm">
                <Row>
                    <div className="col-12 subtitle">Want to Read</div>
                </Row>
               
                {/* Suggestions for you... Section */}
                <div className="row books">
                  {wantBooks.map((books) => (<BookDetail image={books.Book.img} gID={`/review/${books.isbn}`} />))}
                    </div>
                {/* Read Section */}
                </form>
                <form className="currentlyReadingForm">
                <Row>
                    <div className="col-12 subtitle">Read</div>
                    <div className="row books">
                    {readBooks.map((books) => (<BookDetail image={books.Book.img} />))}
                    </div>
                </Row>
</form>

</div>
  <div className="col-1 sidebar"></div>


          </Row>
</div>
        )
}
export default Bookshelf