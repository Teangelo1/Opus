import React from "react";
import {Link} from 'react-router-dom';

function BookDetail(props) {
  return (
    <Link to={props.gID} >

    <img alt={props.title} className="book" src={props.image}  />
    <div>Title(s): {props.title}</div>

  </Link>
  );
}

export default BookDetail;