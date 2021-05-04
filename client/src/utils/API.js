import axios from 'axios';
const BASEURL = ""
let API = {

  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  }
};


export default API;