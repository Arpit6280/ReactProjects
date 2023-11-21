import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  console.log(initialToken);
  const [token, setToken] = useState(initialToken);

  const loginHandler = (tokens) => {
    localStorage.setItem("token", tokens);
    setToken(tokens);
  };
  const userIsLoggedIn = !!token;
  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {" "}
      {props.children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContext;
