import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubOutlined, FilePdfOutlined } from '@ant-design/icons';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/publication.css";

const Publication = (props) => {
	const { date, conf, title, author, paper_link, code_link } = props;

	return (
		<React.Fragment>
			<div className="publication">
				<div className="publication-left-side">
					<div className="publication-date">{date}</div>
				</div>

				<div className="publication-right-side">
					<div className="publication-title">{conf}</div>
					<div className="publication-description">{title}</div>
					<div className="publication-author">{author}</div>
					<div className="publication-link">
					<Link to={code_link}><GithubOutlined style={{ fontSize: '16px', color: '#27272a'}}/></Link>
					{" "}
					<Link to={paper_link}><FilePdfOutlined style={{ fontSize: '16px', color: '#27272a'}}/></Link>
					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Publication;
