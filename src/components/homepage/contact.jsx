import React from "react";

import "./styles/contact.css";

const Contact = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
            <div className="ub-list">
                <ul>
                    <li>
                        316 Davis Hall, Buffalo, NY 14260
                    </li>
                    <li>
                        Department of Computer Science and Engineering
                    </li>
                    <li>
                        University at Buffalo
                    </li>
                    <li>
                        Email: jinjun@buffalo.edu
                    </li>
                </ul>
            </div>
            <div className="ub-icon"><img src="UB_logo.png"></img></div>
		</React.Fragment>
	);
};

export default Contact;
