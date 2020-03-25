// user context
import React, { useState, createContext } from 'react';
export const UserContext = createContext();


const getUserFromLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };

}


const UserProvider = ({ children }) => {

  // const [user, setUser] = useState({ username: null, toke: null });

  const [user, setUser] = useState(getUserFromLocalStorage());

  const userLogin = user => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  }

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );

}

export default UserProvider
