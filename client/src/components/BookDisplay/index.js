import React from "react";
import {Link} from 'react-router-dom';

function BookDetail(props) {
  return (
    <Link to={`/details/${props.gID}`} >
   <div className="text-center">
    <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />


  </div>
  </Link>
  );
}

export default BookDetail;