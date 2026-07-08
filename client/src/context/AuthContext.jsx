import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("UserData")) || "",
  );

  const [isLogin, setIsLogin] = useState(!!user);

  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = { user, setUser, isLogin, setIsLogin };

  return (
    <>
      <AuthContextData.Provider value={value}>
        {children}
      </AuthContextData.Provider>
    </>
  );
};

// Custom hook created here
export const Auth = () => useContext(AuthContextData);

export default AuthContext;
