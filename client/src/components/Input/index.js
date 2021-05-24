import React from "react";

function Input(props, ref) {
  return (
    <div className="row">
    <div className="col-2"></div>
    <div className="form-group input-group-lg col-8">
      <label htmlFor={props.id}>{props.label}</label>
      <input className="form-control" ref={ref} type={props.type} id={props.id} onChange={props.onChange} name={props.name} placeholder={props.placeholder}/>
    </div>
    <div className="col-2"></div>
    </div>
  );
}

export default React.forwardRef(Input);