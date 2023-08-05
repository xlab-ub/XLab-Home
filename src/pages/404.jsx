import React from 'react';
import { Link } from 'react-router-dom';

import Cell from '../components/common/Cell';
import data from '../data/projects';

const Projects = () => (
 
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A selection of opensource projects</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
);

export default Projects;