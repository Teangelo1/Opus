import React from "react";
function Search({handleInputChange}) {
  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          onChange={ e => handleInputChange(e)}
          name="Books"
          type="text"
          className="form-control"
          placeholder="Find the Book for you"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}
export default Search;

