import React, { useContext, useState } from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
});

export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function loginUser() {
    setIsLoggedIn(true);
  }
  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginUser: loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);
export default useUser;
