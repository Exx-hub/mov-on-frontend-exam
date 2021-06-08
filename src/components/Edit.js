import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/Context";

function Edit() {
	const [values, setValues] = useState({
		first_name: "",
		last_name: "",
		email: "",
	});
	const { users, setUsers } = useContext(UserContext);

	const history = useHistory();
	const location = useLocation();

	const id = parseInt(location.pathname.slice(12));

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};
	const handleEdit = (e) => {
		e.preventDefault();

		axios(`https://reqres.in/api/users/{id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				console.log(data);
				alert(`updatedAt: ${data.data.updatedAt}`);
			})
			.catch((err) => console.log(err));

		const updatedUsers = users.map((item) => {
			if (item.id === id) {
				item.first_name = values.first_name;
				item.last_name = values.last_name;
				item.email = values.email;
			}
			return item;
		});

		setUsers(updatedUsers);

		history.push("/users");
	};

	useEffect(() => {
		const currentUser = users.filter((user) => user.id === id);
		setValues(currentUser[0]);
	}, [id, users]);

	return (
		<div role="button" className="modal-wrapper">
			<div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
				<h2>EDIT USER</h2>
				<form className="edit__form">
					<h3>First Name: </h3>
					<input
						autoFocus
						type="text"
						placeholder="Enter your first name"
						name="first_name"
						value={values?.first_name}
						onChange={handleChange}
					/>
					<h3>Last Name: </h3>
					<input
						type="text"
						placeholder="Enter your last name"
						name="last_name"
						value={values?.last_name}
						onChange={handleChange}
					/>
					<h3>Email: </h3>
					<input
						type="email"
						placeholder="Enter your email"
						name="email"
						value={values?.email}
						onChange={handleChange}
					/>
					<br />
					<button
						className="cancel__button"
						onClick={() => history.push("/users")}
					>
						Cancel
					</button>
					<button className="create__button" onClick={handleEdit}>
						Confirm
					</button>
				</form>
			</div>
		</div>
	);
}

export default Edit;
