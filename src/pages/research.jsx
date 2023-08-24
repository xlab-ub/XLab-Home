import React, {useEffect } from "react";
import { Anchor, Col, Row } from 'antd';
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllCases from "../components/research/allCase";

import ResearchINFO from "../data/research";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/research.css";

const Research = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "research");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Research | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="research" />
				<div className="content-wrapper">
					<div className="research-logo-container">
						<div className="research-logo">
							<Logo width={80} />
						</div>
					</div>

					<div className="research-container">
						<div className="title research-title">
						{ResearchINFO.main.title}
						</div>
						<div className="research-img">
							<img
								src="Ai.jpg"
								alt="about"
							/>
						</div>
						<Row>
							<Col span={20}>
							<div id="part-1" className="section-container">
								<div className="section-title">{ResearchINFO.main.section1.whole}</div>
								<AllCases section='section1' />
							</div>
							<div id="part-2" className="section-container">
								<div className="section-title">{ResearchINFO.main.section2.whole}</div>
								<AllCases section='section1' />
							</div>
							<div id="part-3" className="section-container">
								<div className="section-title">{ResearchINFO.main.section3.whole}</div>
								<AllCases section='section1' />
							</div>
							</Col>
							<Col span={4}>
							<Anchor
								items={[
								{
									key: 'part-1',
									href: '#part-1',
									title: 'AI Algorithms',
								},
								{
									key: 'part-2',
									href: '#part-2',
									title: 'AI Solutions',
								},
								{
									key: 'part-3',
									href: '#part-3',
									title: 'AI Systems',
								},
								]}
							/>
							</Col>
						</Row>
					</div>
					<hr />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Research;
