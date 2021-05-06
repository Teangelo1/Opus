import React, { Component } from "react";
import '../styles/search.css';
import API from '../utils/API';

class Search extends Component {
  state = {
    books: [{}],
    filteredBooks: [{}]
  }

  componentDidMount() {
    API.searchBooks().then(data => { console.log(data); return data }).then(res => this.setState({
      books: res.data.results,
      filteredBooks: res.data.results
    })).catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    const filtered = this.state.books.filter(book => book.name.first.toLowerCase().startsWith(value.toLowerCase())) // logging data differently after each filter.
    this.setState({
      filteredBooks: filtered
    });
    console.log(this.state)
  };


  render() {

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

        <div class="container">
          <div class="jumbotron">
            <h1>Trending Books</h1>
            <h3 id="trendingQoute">“Today a reader, tomorrow a leader.”</h3>
            <hr />
          </div>



        </div>
</div>



    );
  }
}


export default Search;

