import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../contexts/Context";
import "../styles/Users.scss";

function Users() {
	const { users } = useContext(UserContext);

	const history = useHistory();
	const location = useLocation();

	const createUserModal = () => {
		history.push({
			pathname: `/users/create`,
			state: { background: location },
		});
	};

	const deleteUserModal = (id) => {
		history.push({
			pathname: `/users/delete/${id}`,
			state: { background: location },
		});
	};

	const editUserModal = (id) => {
		history.push({
			pathname: `/users/edit/${id}`,
			state: { background: location },
		});
	};

	return (
		<div className="users">
			<div className="users__heading">
				<h1>Users</h1>
				<button className="users__create" onClick={createUserModal}>
					Create User
				</button>
			</div>
			<table className="users__table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Avatar</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>
								<img
									className="table__image"
									src={user.avatar}
									alt="user avatar"
								/>
							</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>
								<button
									className="users__edit users__btn"
									onClick={() => editUserModal(user.id)}
								>
									Edit
								</button>{" "}
								<button
									className="users__delete users__btn"
									onClick={() => deleteUserModal(user.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
