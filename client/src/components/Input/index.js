import React from "react";

function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" id="book-search" {...props} />
    </div>
  );
}

export default Input;