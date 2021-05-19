import React from "react";
// import { Row } from "react-bootstrap";
import "./index.css";
import API from "../../utils/API";
import { useUserContext } from "../../utils/UserContext";
import { createBrowserHistory } from "history"; 
import { NavLink } from "react-router-dom";


function Footer() {
  const [state, dispatch] = useUserContext()

  const history = createBrowserHistory({forceRefresh:true}); 

  function logout(e){
    e.preventDefault()
    const user = ""
  API.logout(user)
  .then(() => {
    dispatch({
      type: "Logout",
      user: ""
    });
  }).then(
    history.push("/")
  )
  }

  return (

    
  <footer  style={{
    position: "fixed",
    bottom: "0",
    width: "100%"}} >

<div className="row headerrow">
                


                <div className="col-10"></div>




                <div className="col-2">
                
                <NavLink
                    className="headerselectors search" onClick={(e) => logout(e)}
                    activeClassName="active"
                    isActive={() => window.location.pathname === `/`}
                    to={`/`}
                >Logout</NavLink>
                
                
                
                {/* <button type="submit" className="headerselectors search" onClick={(e) => logout(e)}>Logout</button> */}
                
                </div>


            </div>

</footer>
  )
}


export default Footer;