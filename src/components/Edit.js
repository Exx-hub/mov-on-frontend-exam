import React from "react";
import { useHistory } from "react-router-dom";

function Edit() {
	const history = useHistory();
	return (
		<div
			role="button"
			className="modal-wrapper"
			onClick={() => history.goBack()}
		>
			<div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
				<p>EDIT</p>
			</div>
		</div>
	);
}

export default Edit;
