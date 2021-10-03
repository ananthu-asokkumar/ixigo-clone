import { createContext } from "react";
import { useState } from "react";
export const AuthContext1 = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const userIsLogIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLogIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <AuthContext1.Provider>{children}</AuthContext1.Provider>;
};

export default AuthContextProvider;
