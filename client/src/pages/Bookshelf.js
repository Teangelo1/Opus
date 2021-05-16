import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "../styles/bookshelf.css";
import BookDetail from '../components/BookDisplay'
// import Footer from "../components/Footer/footer";
import Header from "../components/Navbar/navbar";
import API from '../utils/API'
import { propTypes } from "react-bootstrap/esm/Image";
 function Bookshelf() {
    const [nyBooks, setNyBooks] = useState([])
    const [readBooks, setReadBooks] = useState([])
    const [wantBooks, setWantBooks] = useState([])
    useEffect(() => {
        bookShelfData()
        getReadBooks()
        wantToReadBooks()
      }, [])
      function bookShelfData() {
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
                    <div className="col-2 favbook">Book Here</div>
                    <div className="col-2 aboutme">Name current page here</div>
                    <div className="col-4"></div>
                </Row>
                </form>
                {/* Want to Read Section */}
                <form className="currentlyReadingForm">
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
                    {wantBooks.map((books) => (<BookDetail image={books.img} gID={`/review/${books.isbn}`} /> ))}
                    </div>
                {/* Read Section */}
                </form>
                <form className="currentlyReadingForm">
                <Row>
                    <div className="col-12 subtitle">Read</div>
                    <div className="row books">
                    {readBooks.map((books) => (<BookDetail image={books.img} /> ))}
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