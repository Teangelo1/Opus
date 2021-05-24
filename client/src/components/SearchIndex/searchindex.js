import React from "react";
function SearchInput(props, ref) {
  return (
    <div className="form-group input-group-lg col-9">
      <label htmlFor={props.id}>{props.label}</label>
      <input className="form-control" ref={ref} type={props.type} id={props.id} onChange={props.onChange} name={props.name} placeholder={props.placeholder}/>
    </div>
  );
}
export default React.forwardRef(SearchInput);