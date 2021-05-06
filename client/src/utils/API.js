import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const ISBNURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const newYorkTimes = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"
const apiKey = "api-key=YQzPf8Ti4C67VJiMR46a8vL4wH2BAOXW"

let API = {

  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  

  trendingBooks: function() {
    return axios.get(`${newYorkTimes}${apiKey}`);

 // for testing only
  testRoute: function(){
    return axios.get(ISBNURL + "1101985364")
   

  }
};


export default API;