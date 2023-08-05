import React from 'react';
import { Link } from 'react-router-dom';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img
                        src="Jinjun.jpg"
                        alt="about"
                      />
      </Link>
      <header>
        <h2>JINJUN XIONG</h2>
        <p>Empire Innovation Professor</p>
        <p>Computer Science and Engineering</p>
        <p>State University of New York at Buffalo</p>
        <p><a href="jinjun@buffalo.edu">jinjun@buffalo.edu</a></p>
        <p>716-645-4760</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Inroduction...</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; XLab-UB <Link to="/">Home</Link>.</p>
    </section>
  </section>
);

export default SideBar;
