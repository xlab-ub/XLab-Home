import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 800);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially on component mount

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setNavbarVisible(false);
            } else {
                // Scrolling up
                setNavbarVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        // Set up scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up function
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className={navbarVisible ? "navbar" : "navbar hidden"}>
                    <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <div className={isOpen ? "nav-background open" : "nav-background"}>
                        <ul className="nav-list" style={{ display: isOpen ? "flex" : "none" }}>
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/">Home</Link>
                            </li>
                            <li className={active === "bio" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/bio">About</Link>
                            </li>
                            <li className={active === "research" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/research">Research</Link>
                            </li>
                            <li className={active === "publications" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/publications">Publications</Link>
                            </li>
                            <li className={active === "opensource" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/opensource">Opensource</Link>
                            </li>
                            <li className={active === "team" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/team">Team</Link>
                            </li>
                            <li className={active === "events" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/events">Events</Link>
                            </li>
                            <li className={active === "blog" ? "nav-item active" : "nav-item"}>
                                <Link to="/xlab-home/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;

