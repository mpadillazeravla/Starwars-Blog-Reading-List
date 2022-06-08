import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://socialgeek.co/wp-content/uploads/2017/09/star-wars-logo.jpg" style= {{width: 180, height: 80}}/></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</div>
				</Link>
			</div>
		</nav>
		</div>
		</>
	);
};
