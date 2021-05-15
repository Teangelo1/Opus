import React from 'react';

const userContext = React.createContext({
    login: false,
    setlogin: () => {}
});

export default userContext; 