import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Publication from "../components/publications/publication";

import INFO from "../data/user";
import SEO from "../data/seo";
import PublicationsINFO from "../data/publications";

import "./styles/publications.css";
import Toolbox from "../components/publications/toolbox";

const Publications = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "publications");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Publications | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="publications" />
				<div className="content-wrapper">
					<div className="publications-logo-container">
						<div className="publications-logo">
							<Logo width={80} />
						</div>
					</div>

					<div className="publications-main-container">
						<div className="title publications-title">
							{INFO.publications.title}
						</div>

						<div className="publications-img">
							<img
								src="publications.jpg"
								alt="about"
							/>
						</div>

						<div className="subtitle publications-subtitle">
							{INFO.publications.description}
						</div>

						<div className="publications-container">
							<div className="publications-wrapper">
								{PublicationsINFO.conferences.map((item, index) => (
									<div
										className="publications-article"
										key={(index + 1).toString()}
									>
										<Publication
											key={(index + 1).toString()}
											date={item.date}
											conf={item.conf}
											title={item.title}
											author={item.author}
											paper_link={item.paper_link}
											code_link={item.code_link}
										/>
									</div>
								))}
							</div>
							<Toolbox />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Publications;
