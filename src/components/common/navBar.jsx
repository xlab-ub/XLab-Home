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
								<Link to="/xlab-home/">Home</Link>
							</li>
							<li
								className={
									active === "bio"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/bio">About</Link>
							</li>
							<li
								className={
									active === "research"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/research">Research</Link>
							</li>
							<li
								className={
									active === "publications"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/publications">Publications</Link>
							</li>
							<li
								className={
									active === "opensource"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/opensource">Opensource</Link>
							</li>
							<li
								className={
									active === "team"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/team">Team</Link>
							</li>
							<li
								className={
									active === "events"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/events">Events</Link>
							</li>
							<li
								className={
									active === "blog"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/xlab-home/blog">Blog</Link>
							</li>			
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
