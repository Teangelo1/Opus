import React from "react"; // use context needs to be called somehow 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContext from "./utils/UserContext";
import UserLogin from "./pages/UserLogin";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";
import UserDetails from "./pages/UserDetails";
import UserSignup from "./pages/UserSignup";
import BookDetails from "./pages/BookDetails";
import UserReviews from "./pages/UserReview";


function App() {
  // const [status, setStatus] = useState(); 

  return (

   // <UserContext.Provider value={{ status, setStatus }}> */ }
    
    <Router>
      <Switch>
        <Route exact path="/" component={UserLogin} />
        <Route exact path="/newuser" component={UserSignup} />
        <UserContext>
          <Route exact path="/bookshelf" component={Bookshelf} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={BookDetails} />
          <Route exact path="/account" component={UserDetails} />
          <Route exact path="/review/:id" component={UserReviews} />
        </UserContext>
      </Switch>

    </Router>
      
    
  );
}


export default App;



