import Bookshelf from "./pages/Bookshelf";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from "./pages/Search"; 
import BookDetails from "./pages/BookDetails";
import UserLogin from "./pages/UserLogin"; 
import UserDetails from "./pages/UserDetails";



function App() {
  return (
<div>
<Router>
{/* <Header/> */}
<Switch>
{/* Paths for pages */}
<Route exact path = "/" component={UserLogin} />
<Route exact path = "/bookshelf" component={Bookshelf} />
<Route exact path = "/search" component={Search} />
<Route exact path = "/details/:id" component={BookDetails} />
<Route exact path = "/account" component={UserDetails} />

</Switch>

</Router>


</div>


  );
}


export default App;
