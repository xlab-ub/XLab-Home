import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
