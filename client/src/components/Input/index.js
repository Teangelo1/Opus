import React from "react";

function Input(props) {
  return (
    <div className="form-group input-group-lg">
      <label for={props.id}>{props.label}</label>
      <input className="form-control" type={props.type} id={props.id} onChange={props.onChange} name={props.name} placeholder={props.placeholder}/>
    </div>
  );
}

export default Input;