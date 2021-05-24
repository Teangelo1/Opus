import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";
import UserLogin from "./pages/UserLogin";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";
import UserSignup from "./pages/UserSignup";
import BookDetails from "./pages/BookDetails";
import UserReviews from "./pages/UserReview";
import OpusLeague from "./pages/OpusLeague";
// import Navbar from "./components/Navbar";

function App() {

  return (

    <Router>
      <Switch>
        <UserProvider>
        {/* <Navbar /> */}
          <Route exact path="/">
          <UserLogin />
          </Route>
          <Route exact path="/newuser">
          <UserSignup />
          </Route>
          <Route exact path="/bookshelf/:userId">
          <Bookshelf />
          </Route>
          <Route exact path="/search">
          <Search />
          </Route>
          <Route exact path="/details/:id">
          <BookDetails />
          </Route>
          <Route exact path="/reviews/:userId">
          <UserReviews />
          </Route>
          <Route exact path="/opusleague">
          <OpusLeague />
          </Route>
        </UserProvider>
      </Switch>

    </Router>

  );
}


export default App;



