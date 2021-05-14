import React from "react";

function Input(props) {
  return (
    <div className="form-group input-group-lg col-9">
      <label for={props.id}>{props.label}</label>
      <input className="form-control" type="text" id={props.id} onChange={props.onChange} name={props.name} placeholder={props.placeholder}/>
    </div>
  );
}

export default Input;