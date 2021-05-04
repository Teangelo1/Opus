import Bookshelf from "./pages/Bookshelf";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
<div>
<Router>
{/* <Header/> */}
<Switch>

{/* Paths for pages */}
<Route exact path = "/bookshelf" component = {Bookshelf} />








</Switch>

</Router>






</div>


  );
}

export default App;