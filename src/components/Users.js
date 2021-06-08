import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../contexts/Context";

function Users() {
	const { users, setUsers } = useContext(UserContext);
	// console.log(users);

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

	// const handleDelete = (id) => {
	// 	const deleteOne = users.filter((user) => user.id !== id);
	// 	setUsers(deleteOne);
	// };

	// const editUserModal = (id) => {
	// 	fetch(`https://reqres.in/api/users/{id}`, {
	// 		method: "PUT",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			first_name: editFirst,
	// 			last_name: editLast,
	// 			email: editEmail,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data));
	// };

	const editUserModal = (id) => {
		const editOne = users.map((user) => {
			if (user.id === id) {
				user.first_name = "";
				user.last_name = "";
				user.email = "";
			}
			return user;
		});

		setUsers(editOne);
	};

	return (
		<div>
			<button onClick={createUserModal}>Create User</button>
			<h1>USERS</h1>
			{/* table rows should be max 20 rows, pagination  */}
			<table>
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
								<img src={user.avatar} alt="user avatar" />
							</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<button onClick={() => editUserModal(user.id)}>Edit</button>{" "}
								<button onClick={() => deleteUserModal(user.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
