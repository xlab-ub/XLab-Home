import React from "react";

import Case from "./case";

import ResearchINFO from "../../data/research";

import "./styles/allCase.css";

const AllCases = (props) => {
	const { section } = props;
	if (section == 'section1') {
		return (
			<div className="area-container">
				<div className="area-head">
					{ResearchINFO.main.section1.area1}
				</div>
				<div className="area-content">
					<div className="all-cases-container">
					{ResearchINFO.section1.area1.map((item, index) => (
						<div className="all-cases-case" key={index}>
							<Case
								paper={item.paper}
								img={item.img}
								conf={item.conf}
								description={item.description}
								link={item.link}
							/>
						</div>
					))}
					</div>					
				</div>
				<div className="area-head">
					{ResearchINFO.main.section1.area2}
				</div>
				<div className="area-content">
					<div className="all-cases-container">
					{ResearchINFO.section1.area2.map((item, index) => (
						<div className="all-cases-case" key={index}>
							<Case
								paper={item.paper}
								img={item.img}
								conf={item.conf}
								description={item.description}
								link={item.link}
							/>
						</div>
					))}
					</div>					
				</div>
			</div>
			
		);
	}
};

export default AllCases;
