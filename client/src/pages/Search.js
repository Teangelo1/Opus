import React from "react";
import '../styles/search.css';
import '../utils/API';


function Search() {

  return (
    <div>
      <div className="container search-content">
        <div className="row">
          <div className="col-12">
            <div>
              <h1><strong>Opus</strong></h1>
            </div>
            <div className="card-body">
              <input type="text" id="book-search" className="form-control"
                placeholder='“A room without books is like a body without a soul.”' />
              <br />
              <div className="button-center">
                <button
                  type="submit"
                  className="btn btn-dark btn-md"
                  id="search-btn">
                  <span className=""></span> Find the Book for you
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
export default Search;

