import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Edit() {
	const history = useHistory();
	const [values, setValues] = useState(null);

	const handleChange = () => {};
	const handleEdit = {};
	return (
		<div role="button" className="modal-wrapper">
			<div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
				<h2>EDIT USER</h2>
				<form>
					<h3>First Name: </h3>
					<input
						type="text"
						placeholder="Enter your first name"
						name="first_name"
						// value={values.first_name}
						onChange={handleChange}
					/>
					<h3>Last Name: </h3>
					<input
						type="text"
						placeholder="Enter your last name"
						name="last_name"
						// value={values.last_name}
						onChange={handleChange}
					/>
					<h3>Email: </h3>
					<input
						type="email"
						placeholder="Enter your email"
						name="email"
						// value={values.email}
						onChange={handleChange}
					/>
					{/* <button onClick={handleEdit}>Edit</button> */}
					<button onClick={() => history.push("/users")}>Cancel</button>
				</form>
			</div>
		</div>
	);
}

export default Edit;
