import React from "react";

function BookDetail(props) {
  return (
   <div className="text-center">
    <img alt={props.title} className="img-fluid" src={props.book_image} style={{ margin: "0 auto" }} />
    <h3>Title(s): {props.title}</h3>

  </div>
  );
}

export default BookDetail;