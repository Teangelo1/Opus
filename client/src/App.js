import React from "react"; // use context needs to be called somehow 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useUserContext, UserProvider } from "./utils/UserContext"; 
import UserLogin from "./pages/UserLogin";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";
import UserDetails from "./pages/UserDetails";
import UserSignup from "./pages/UserSignup";
import BookDetails from "./pages/BookDetails";
import UserReviews from "./pages/UserReview";

// set a session within my app and send it back and forth 

function App() {
  // const [status, setStatus] = useState(); 

  return (

   // <UserContext.Provider value={{ status, setStatus }}> */ }
    
    <Router>
      <Switch>
      <UserProvider>
        <Route exact path="/" component={UserLogin} />
        <Route exact path="/newuser" component={UserSignup} />
       
          <Route exact path="/bookshelf" component={Bookshelf} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={BookDetails} />
          <Route exact path="/account" component={UserDetails} />
          <Route exact path="/review/:id" component={UserReviews} />
        </UserProvider>
      </Switch>

    </Router>
      
    
  );
}


export default App;



