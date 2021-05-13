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
    
    useEffect(() => {
        bookShelfData()
      }, [])
    
      function bookShelfData() {
        API.bookShelfData().then(data => { console.log(data); return data }).then(res => setNyBooks(
         res.data
        )).catch(err => console.log(err))
      } 
    
    
     
        return (
            <div>

                


                <Header></Header>

                {/* Currently Reading Section */}
                <Row>
                    <div className="col-12 pagetitle">Currently Reading</div>
                </Row>

                <Row>
                    <div className="col-4"></div>
                    <div className="col-2 favbook">Book Here</div>
                    <div className="col-2 aboutme">Name current page here</div>
                    <div className="col-4"></div>
                </Row>



                {/* Want to Read Section */}
                <Row>
                    <div className="col-12 subtitle">Want to Read</div>
                </Row>
                <Row>
                <div>We want to display data here</div>
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
            
                <div className="row book">
                    {nyBooks.map((books) => (<BookDetail image={books.img} gID={`/review/${books.isbn}`} /> ))}


                    </div>

                {/* Read Section */}
                <Row>
                    <div className="col-12 subtitle">Read</div>
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