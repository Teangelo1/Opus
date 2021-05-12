import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const ISBNURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
const newYorkTimes = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?";
const apiKey = "api-key=YQzPf8Ti4C67VJiMR46a8vL4wH2BAOXW";

let API = {

  // Google Books API Route
  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  
  // NYT Routes
  trendingBooks: function() {
    return axios.get(`${newYorkTimes}${apiKey}`);
  },

  // db connect 
  saveBooks: function(bookData){
    return axios.post("/api/books", bookData);
  },

 // for testing only
  testRoute: function(id){
    return axios.get(ISBNURL + id); 
  },

  // new user login route
  newUser:  function(userData){
    return axios.post("/api/user/signup/", userData);
  },

  // Returning User Login
  login: function(email){
    return axios.get("api/user/login/" + email)
  }
};


export default API;