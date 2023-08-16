import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllBlogs from "../components/blog/blog";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/blog.css";

const Blog = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "blog");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Blog | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="blog" />
				<div className="content-wrapper">
					<div className="blog-logo-container">
						<div className="blog-logo">
							<Logo width={80} />
						</div>
					</div>

					<div className="blog-main-container">
						<div className="title blog-title">
							Curiosity-driven AI Systems Research.
						</div>

						<div className="blog-img">
							<img
								src="publications.jpg"
								alt="about"
							/>
						</div>

						<div className="blog-wrapper">
							<AllBlogs />
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

export default Blog;
