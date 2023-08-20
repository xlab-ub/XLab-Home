import React from "react";

import "./styles/book.css";

const Book = (props) => {
	const { date, title, author, publish} = props;

	return (
		<React.Fragment>
			<div className="book">
				<div className="book-left-side">
					<div className="book-date">{date}</div>
				</div>

				<div className="book-right-side">
					<div className="book-title">{publish}</div>
					<div className="book-description">{title}</div>
					<div className="book-author">{author}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Book;
