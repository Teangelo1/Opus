import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/bookshelf.css";
import BookDetail from '../components/BookDisplay'
// import Footer from "../components/Footer/footer";
import Header from "../components/Navbar/navbar";
import API from '../utils/API'
import addBookWant from '../pages/BookDetails'
import addBookRead from "../pages/BookDetails"

function Bookshelf() {



  const [shelfBooks, setShelfBooks] = useState([])

  useEffect(() => {
    bookShelfData()
  }, [])

  function bookShelfData() {
    API.bookShelfData().then(data => { console.log(data); return data }).then(res => setShelfBooks(
      res.data
    )).catch(err => console.log(err))
  }



  return (
    <div>




      <Header />

      {/* Currently Reading Section */}
      <Row>
        <div className="col-12 pagetitle">Currently Reading</div>
      </Row>

      <Row>
        <div className="col-4"><div></div></div>
        <div className="col-2 favbook">Book Here</div>
        <div className="col-2 aboutme">Name current page here</div>
        <div className="col-4"></div>
      </Row>



      {/* Want to Read Section */}
      <Row>
        <div className="col-12 subtitle">Want to Read</div>
      </Row>
      <Row>

        {!shelfBooks.length ? (
          <h2>No Want to Read Books at the moment</h2>
        ) :
          <div>
            {shelfBooks.map((books) => (
              <BookDetail
                image={books.img}
                want={(index) => addBookWant(index)}



              />
            ))}

          </div>
        }


      </Row>

      {/* Suggestions for you... Section */}
      <Row>
        <div className="col-12 subtitle">Suggestions for you...</div>
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

      {/* Read Section */}
      <Row>
        <div className="col-12 subtitle">Read</div>

        <Row>

          {!shelfBooks.length ? (
            <h2>No Read Books at the moment</h2>
          ) :
            <div>
              {shelfBooks.map((books) => (
                <BookDetail
                  read={() => addBookRead()}
                  image={books.img}


                />
              ))}

            </div>
          }


        </Row>
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