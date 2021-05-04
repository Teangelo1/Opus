import React from "react";
function Search({handleInputChange}) {
  
  return (
    <form>
      <div className="form-group">
      
        <input
          onChange={ e => handleInputChange(e)}
          name="Books"
          type="text"
          className="form-control"
          placeholder="Find the Book for you"
          id="search"
        />
         <label htmlFor="search">Search</label>
        <br />
      </div>
    </form>
  );
}
export default Search;

