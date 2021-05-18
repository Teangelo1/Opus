import React from "react";
// import { Row } from "react-bootstrap";
import "./index.css";
import API from "../../utils/API";
import { useUserContext } from "../../utils/UserContext";
import { createBrowserHistory } from "history"; 

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
    <div>
    <button type="submit" onClick={(e) => logout(e)}>Logout</button>
    </div>
  )
}


export default Footer;