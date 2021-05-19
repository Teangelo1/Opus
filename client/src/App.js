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
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/newuser" component={UserSignup} />
          <Route exact path="/bookshelf/:userId" component={Bookshelf} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={BookDetails} />
          <Route exact path="/reviews/:userId" component={UserReviews} />
          <Route exact path="/opusleague" component={OpusLeague} />
        </UserProvider>
      </Switch>

    </Router>

  );
}


export default App;



