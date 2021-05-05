import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
let API = {

  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  }
};


export default API;