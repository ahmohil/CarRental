import React, { createContext, useState, useContext } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
	const [user, setUser] = useState("");
	return <UsersContext.Provider value={{ user, setUser }}>{children}</UsersContext.Provider>;
};

const useUsers = () => {
	return useContext(UsersContext);
};

export { UsersProvider, useUsers };
