import React from "react";
import { useHistory } from "react-router-dom";

function Delete() {
	const history = useHistory();
	return (
		<div
			role="button"
			className="modal-wrapper"
			onClick={() => history.goBack()}
		>
			<div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
				<p>Delete</p>
			</div>
		</div>
	);
}

export default Delete;
