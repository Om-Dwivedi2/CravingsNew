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

export const Auth = () => useContext(AuthContextData);

export default AuthContext;

// import React, { createContext, useContext, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = (props) => {
//   const [user, setUser] = useState("");
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     setIsLogin(!!user);
//   }, [user]);

//   const value = {
//     user,
//     setUser,
//     isLogin,
//     setIsLogin,
//   };

//   return (
//     <>
//       <AuthContext.Provider value={value}>
//         {props.children}
//       </AuthContext.Provider>
//     </>
//   );
// };

// // Custom hook created here
// export const useAuth = () => useContext(AuthContext);

// export default AuthProvider;
