import React from 'react';
import Project from './Project';
import { projects } from './data';

const Projects = ({}) => (
  <div className="d-flex flex-wrap mt-3">
    {projects.map((project, index) => (
      <Project {...project} key={index} index={index}/>
    ))
    }
  </div>
);

export default Projects;