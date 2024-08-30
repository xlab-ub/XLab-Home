import React from "react";
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";

import INFO from "../../data/user";
import SEO from "../../data/seo";

import "./styles/main.css";
import Toolbox from "./toolbox";


const currentSEO = SEO.find((item) => item.page === "publications")
const Main = (props) => (
  <HelmetProvider>
        <Helmet>
            <title>{`publications | ${INFO.main.title}`}</title>
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
                            src="banner.jpg"
                            alt="about"
                        />
                    </div>

                    <div className="publications-container">
                        <div className="publications-wrapper">
                            { props.children }
                        </div>
                        <Toolbox />
                    </div>
                </div>
                <div className="page-footer">
                    <Footer />
                </div>
            </div>
        </div>
    </HelmetProvider>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  
  Main.defaultProps = {
    children: null,
  };
  
  export default Main;
  