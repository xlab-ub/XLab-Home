import React from "react";

import Profile from "./profile";

import TeamINFO from "../../data/team";

import "./styles/allProfile.css";

const AllProfiles = () => {
	return (
		<div className="all-profiles-container">
			{TeamINFO.phds.map((item, index) => (
				<div className="all-profiles-profile" key={index}>
					<Profile
						name={item.name}
						start={item.start}
                        B_S={item.B_S}
                        M_S={item.M_S}
                        profile={item.profile}
                        link = {item.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProfiles;
