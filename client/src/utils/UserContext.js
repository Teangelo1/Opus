
import React, { createContext, useState, useEffect } from "react";
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
      fetch("/api/user/userdata/")
          .then(res => res.json())
          .then(res => setUser(res))
          .then(console.log(user))
          .catch(err => {
              console.log(err);
          });
          console.log("inside provider fyi")
  }, []);

  return (
      <context.Provider value={user}>
          {children}
      </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;