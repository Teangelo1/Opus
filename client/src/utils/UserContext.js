import React, { createContext, useReducer, useContext } from "react";

const userContext = createContext(); 
const { Provider } = userContext; 

const reducer = (state, action) => { //set user and clear user 
  switch (action.type) {
  case "Login":
    return { user: action.user };
  case "Logout":
    return { user: {} }; 
  default:
    throw new Error(`Invalid action type`);
  }
};

const UserProvider = ({ value=[], ...props }) => {
  const [state, dispatch] = useReducer(reducer, { user: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(userContext);
};

export { UserProvider, useUserContext };