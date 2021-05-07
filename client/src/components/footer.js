import React from "react";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../styles/footer.css"


export default class Footer extends React.Component{


    render(){
        return(
    
      <footer  style={{
        position: "fixed",
        bottom: "0",
        width: "100%"}} >
      <Row>


     <div className="col-3"></div>

     <div className="col-4">
                <input type="text" id="book-search" className="form-control"
                  placeholder='“A room without books is like a body without a soul.”' />
               
                </div>


                <div className="col-2">
                  <button
                    type="submit"
                    className="btn btn-dark"
                    id="search-btn">
                    <span className=""></span> Find the Book for you
                </button>
                </div>

                <div className="col-2"></div>
           


              </Row>
      </footer> 
    
    
    
    
    
    )}}