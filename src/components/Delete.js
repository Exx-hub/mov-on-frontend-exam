import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/Context";

function Delete() {
	const [currentUser, setCurrentUser] = useState("");
	const { users, setUsers } = useContext(UserContext);

	const history = useHistory();
	const location = useLocation();

	const id = parseInt(location.pathname.slice(14));

	const handleDelete = (e) => {
		e.preventDefault();

		axios
			.delete(`https://reqres.in/api/users/${id}`)
			.then((data) => {
				console.log(data);

				alert(`deleted: ${data.config.url}`);
			})
			.catch((err) => console.log(err));

		const deleteOne = users.filter((user) => user.id !== id);

		setUsers(deleteOne);
		history.push("/users");
	};

	useEffect(() => {
		const current = users.filter((user) => user.id === id);
		setCurrentUser(current[0]);
	}, [id, users]);

	return (
		<div role="button" className="modal-wrapper">
			<div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
				<h2>DELETE USER</h2>
				<img src={currentUser?.avatar} alt="user" />
				<h3>
					{currentUser?.first_name} {currentUser?.last_name}
				</h3>
				<h4>{currentUser?.email}</h4>
				<button onClick={() => history.push("/users")}>Cancel</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}

export default Delete;
