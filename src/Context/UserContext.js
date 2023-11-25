import React, { createContext, useState, useContext } from "react";
import Users from "../Data/Users";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(Users);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  return useContext(UsersContext);
};

export { UsersProvider, useUsers };
