import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../template/Analytics';
import NavBar from "../common/navBar";
import SideBar from '../template/SideBar';
import ScrollToTop from '../template/ScrollToTop';

import INFO from "../../data/user";
import SEO from "../../data/seo";

const currentSEO = SEO.find((item) => item.page === "bio")
const Side = (props) => (

  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet>
        <title>{`Bio | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
            name="keywords"
            content={currentSEO.keywords.join(", ")}
        />
    </Helmet>
    <NavBar active="bio" />
    <div id="wrapper">
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Side.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Side.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "About | Prof.Jinjun Xiong",
};

export default Side;
