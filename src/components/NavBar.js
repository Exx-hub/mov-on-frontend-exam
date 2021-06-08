import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.scss";
function NavBar() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="nav">
			<Link className={path === "/" ? "link active" : "link"} to="/">
				Home
			</Link>
			<Link className={path === "/users" ? "link active" : "link"} to="/users">
				Users
			</Link>
		</div>
	);
}

export default NavBar;
