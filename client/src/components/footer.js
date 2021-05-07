import React from "react";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";



export default class Footer extends React.Component{


    render(){
        return(
    
      <footer  style={{
        position: "fixed",
        bottom: "0",
        width: "100%"}} >
      <Row>


     <div className="col-3"></div>

     <div className="col-3">
                <input type="text" id="book-search" className="form-control"
                  placeholder='“A room without books is like a body without a soul.”' />
                <br />
                </div>


                <div className="button-center col-3">
                  <button
                    type="submit"
                    className="btn btn-dark"
                    id="search-btn">
                    <span className=""></span> Find the Book for you
                </button>
                </div>

                <div className="col-3"></div>
           


              </Row>
      </footer> 
    
    
    
    
    
    )}}