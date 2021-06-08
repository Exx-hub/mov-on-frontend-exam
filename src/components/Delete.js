import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/Context";

function Delete() {
	const history = useHistory();
	const [currentUser, setCurrentUser] = useState("");
	const { users, setUsers } = useContext(UserContext);
	const location = useLocation();

	const id = parseInt(location.pathname.slice(14));

	console.log(currentUser);

	const handleDelete = () => {
		axios.delete(`https://reqres.in/api/users/${id}`).then((data) => {
			console.log(data);

			alert(`deleted: ${data.config.url}`);
		});

		const deleteOne = users.filter((user) => user.id !== id);

		setUsers(deleteOne);
		history.goBack();
	};

	useEffect(() => {
		const currentUser = users.filter((user) => user.id === id);
		setCurrentUser(currentUser[0]);
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
				<button onClick={handleDelete}>Delete</button>
				<button onClick={() => history.goBack()}>Cancel</button>
			</div>
		</div>
	);
}

export default Delete;
