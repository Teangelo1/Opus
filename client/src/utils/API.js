import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
let API = {

  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  
 // for testing only
  testRoute: function(){
    return axios.get(BASEURL + "The Last Time I Lied")
  }
};


export default API;