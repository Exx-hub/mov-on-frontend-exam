import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserContext = React.createContext();

function ContextProvider({ children }) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const page1 = await axios.get("https://reqres.in/api/users?page=1");
			const page2 = await axios.get("https://reqres.in/api/users?page=2");

			setUsers([...page1.data.data, ...page2.data.data]);
		};

		getUsers();
	}, []);

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			{children}
		</UserContext.Provider>
	);
}

export default ContextProvider;
