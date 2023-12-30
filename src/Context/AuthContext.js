import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState("");
	const login = (userData, token) => {
		setIsLoggedIn(true);
		setLoggedInUser(userData);
		setToken(token);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setLoggedInUser(null);
	};

	return (
		<AuthContext.Provider value={{ loggedInUser, login, logout, isLoggedIn, token }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => {
	return useContext(AuthContext);
};

export { AuthProvider, useAuth };
