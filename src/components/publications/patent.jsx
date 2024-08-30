import React from "react";

import "./styles/patent.css";

const Patent = (props) => {
	const { date, title, author, id} = props;

	return (
		<React.Fragment>
			<div className="patent">
				<div className="patent-left-side">
					<div className="patent-date">{date}</div>
				</div>

				<div className="patent-right-side">
					<div className="patent-title">{id}</div>
					<div className="patent-description">{title}</div>
					<div className="patent-author">{author}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Patent;
