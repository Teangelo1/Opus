import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const ISBNURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
const newYorkTimes = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?";
const apiKey = "api-key=YQzPf8Ti4C67VJiMR46a8vL4wH2BAOXW";

let API = {
  // Google Books API Route
  searchBooks: function (query) {
    return axios.get(BASEURL + query);
  },

  // Google Books API Indvidual Books Details -- rename this to not test route
  testRoute: function (id) {
    return axios.get(ISBNURL + id);
  },

  // NYT Routes
  trendingBooks: function () {
    return axios.get(`${newYorkTimes}${apiKey}`);
  },

  // save to the books database 
  saveBooks: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Get all Books in the books database -- are we using? 
  bookShelfData: function () {
    return axios.get("/api/books")
  },

  // Return one book in Db -- are we using? 
  returnSaved: function (isbn) {
    return axios.get("/api/books/" + isbn);
  },

  // return one book in db by book id -- are we using?
  returnSavedDB: function () {
    return axios.get("/api/books/load")
  },

  // new user login route
  newUser: function (userData) {
    return axios.post("/api/user/signup/", userData);
  },

  // Returning User Login
  login: function (user) {
    return axios.post("/api/user/login/", user)
  },

  // logout 
  logout: function(){
    return axios.get("/api/user/logout")
  },

  // next three functions get books for the book shelf 
  getReadBooks: function (userId) {
    return axios.get("/api/books/shelf/read/" + userId)
  },

  wantToReadBooks: function (userId) {
    return axios.get("/api/books/shelf/want/" + userId)
  },

  currentlyReading: function (userId) {
    return axios.get("/api/books/shelf/current/" + userId)
  },

  // returns a users complete shelf 
  completeShelf: function (userId) {
    return axios.get("/api/books/shelf/user/" + userId)
  },

  // update a review for a user 
  updateSaved: function (bookReview) {
    return axios.post("/api/books/shelf/update", bookReview)
  },

  // // update a review for a user 
  updateStar: function (starRating) {
    return axios.post("/api/books/shelf/updatestar", starRating)
  },

  // log in route shows if you are logged in or not -- for testing mainly? may need
  getUser: function () {
    return axios.get("/api/user/userdata")
  }
};


export default API;