import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
	const [users, setUsers] = useState([]);
	console.log(users);

	const [editFirst, setEditFirst] = useState("Alvin");
	const [editLast, setEditLast] = useState("Acosta");
	const [editEmail, setEditEmail] = useState("alvinfloresacosta@gmail.com");

	const handleDelete = (id) => {
		axios
			.delete(`https://reqres.in/api/users/{id}`)
			.then((data) => console.log(data));
	};

	// const handleDelete = (id) => {
	// 	const deleteOne = users.filter((user) => user.id !== id);
	// 	setUsers(deleteOne);
	// };

	const handleEdit = (id) => {
		fetch(`https://reqres.in/api/users/{id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				first_name: editFirst,
				last_name: editLast,
				email: editEmail,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	// const handleEdit = (id) => {
	// 	const editOne = users.map((user) => {
	// 		if (user.id === id) {
	// 			user.first_name = editFirst;
	// 			user.last_name = editLast;
	// 			user.email = editEmail;
	// 		}
	// 		return user;
	// 	});

	// 	setUsers(editOne);
	// };

	useEffect(() => {
		const getUsers = async () => {
			const page1 = await axios.get("https://reqres.in/api/users?page=1");
			const page2 = await axios.get("https://reqres.in/api/users?page=2");

			setUsers([...page1.data.data, ...page2.data.data]);
		};

		getUsers();
	}, []);
	return (
		<div>
			<button>Create User</button>
			<h1>USERS</h1>

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
								<button onClick={() => handleEdit(user.id)}>Edit</button>{" "}
								<button onClick={() => handleDelete(user.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
