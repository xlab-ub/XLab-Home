import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Side from '../components/common/side';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/bio.css";

const Bio = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <React.Fragment>
      <div className="page-content">
				<NavBar active="events" />
				<div className="content-wrapper">
					<div className="bio-logo-container">
						<div className="bio-logo">
							<Logo width={80} />
						</div>
					</div>
        </div>
        <div className='bio-content-wrapper'>
          <Side
            title="About"
          >
            <article className="post markdown" id="about">
              <Markdown>
                {markdown}
              </Markdown>
            </article>
          </Side>
        </div>
        <hr />
				<Footer />
      </div>
    </React.Fragment>
  );
};

export default Bio;
