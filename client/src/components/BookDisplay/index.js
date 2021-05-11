import React from "react";
import {Link} from 'react-router-dom';
import "../BookDisplay/style.css";

function BookDetail(props) {
  return (
    <Link to={`/details/${props.gID}`} >
   <div className="flex-container">
    <img alt={props.title} className="img-fluid book-item" src={props.image} /> <br />
    <br />

  </div>
  </Link>
  );
}

export default BookDetail;