import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from "./utils/UserContext";
import UserLogin from "./pages/UserLogin";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";
import UserDetails from "./pages/UserDetails";
import UserSignup from "./pages/UserSignup";
import BookDetails from "./pages/BookDetails";
import UserReviews from "./pages/UserReview";


function App() {

  return (

    <Router>
      <Switch>
        <UserProvider>
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/newuser" component={UserSignup} />
          <Route exact path="/bookshelf" component={Bookshelf} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={BookDetails} />
          <Route exact path="/account" component={UserDetails} />
          <Route exact path="/review" component={UserReviews} />
        </UserProvider>
      </Switch>

    </Router>

  );
}


export default App;



