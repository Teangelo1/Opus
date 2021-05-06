import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const ISBNURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";

let API = {

  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  
 // for testing only
  testRoute: function(){
    return axios.get(ISBNURL + "1101985364")
  }
};


export default API;