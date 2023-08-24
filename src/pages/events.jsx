import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LinkOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllEvents from "../components/events/eventslist";

import SEO from "../data/seo";
import INFO from "../data/user";
import EventSwitches from "../data/eventswitches"

import "./styles/events.css";

const SingleSwitch = (props) => {
	const { title, date, img, link } = props;

	return (
		<React.Fragment>
			<div className="events-switch-img">
                <p>{title}</p>
                <img
                    src={img}
                    alt="about"
                />
            </div>
            Source: <Link to={link}><LinkOutlined style={{ fontSize: '18px', color: '#005BBB'}}/></Link> Date: {date}
		</React.Fragment>
	);
};

const AllSwitches = () => {
	return (
        <Carousel effect="fade" autoplay>
			{EventSwitches.map((switchitem, index) => (
				<div className="events-switch" key={index}>
					<SingleSwitch
						title={switchitem.title}
						date={switchitem.date}
                        img={switchitem.img}
						link={switchitem.link}
					/>
				</div>
			))}
		</Carousel>
	);
};

const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "events");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`events | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>
            <div className="page-content">
				<NavBar active="events" />
				<div className="content-wrapper">
					<div className="events-logo-container">
						<div className="events-logo">
							<Logo width={80} />
						</div>
					</div>

					<div className="switch-container">
                        <AllSwitches />
                    </div>
                    <hr />
                    <div className="events-container">
                        
                        {/* <DownOutlined style={{ fontSize: '32px', color: '#005BBB'}}/> */}
                        <AllEvents />
                    </div>
                    <hr />
					<Footer />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Events;