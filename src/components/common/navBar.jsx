import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "bio"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/bio">About</Link>
							</li>
							<li
								className={
									active === "research"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/research">Research</Link>
							</li>
							<li
								className={
									active === "publications"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/publications">Publications</Link>
							</li>
							<li
								className={
									active === "opensource"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/opensource">Opensource</Link>
							</li>
							<li
								className={
									active === "events"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/events">Events</Link>
							</li>
							<li
								className={
									active === "team"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/team">Team</Link>
							</li>
							<li
								className={
									active === "blog"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/bio">Blog</Link>
							</li>			
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
