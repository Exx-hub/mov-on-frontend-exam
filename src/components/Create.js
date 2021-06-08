import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";
import { UserContext } from "../contexts/Context";

function Create() {
	const { users, setUsers } = useContext(UserContext);
	const history = useHistory();

	const [values, setValues] = useState({
		first_name: "",
		last_name: "",
		email: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, id: Math.random(), [name]: value });
	};

	const handleCreate = (e) => {
		e.preventDefault();

		// console.log(values);

		axios(`https://reqres.in/api/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				console.log(data.data.id);
				alert(`id: ${data.data.id} , createdAt: ${data.data.createdAt}`);
				setUsers([
					{
						avatar:
							"http://counselingadvice.weebly.com/uploads/8/7/6/0/8760764/7826970_orig.gif",
						email: values.email,
						first_name: values.first_name,
						id: parseInt(data.data.id),
						last_name: values.last_name,
					},
					...users,
				]);
				history.push("/users");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div role="button" className="modal-wrapper">
			<div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
				<h2>CREATE USER</h2>
				<form>
					<h3>First Name: </h3>
					<input
						type="text"
						placeholder="Enter your first name"
						name="first_name"
						value={values.first_name}
						onChange={handleChange}
					/>
					<h3>Last Name: </h3>
					<input
						type="text"
						placeholder="Enter your last name"
						name="last_name"
						value={values.last_name}
						onChange={handleChange}
					/>
					<h3>Email: </h3>
					<input
						type="email"
						placeholder="Enter your email"
						name="email"
						value={values.email}
						onChange={handleChange}
					/>
					<button onClick={() => history.push("/users")}>Cancel</button>
					<button onClick={handleCreate}>Create</button>
				</form>
			</div>
		</div>
	);
}

export default Create;
