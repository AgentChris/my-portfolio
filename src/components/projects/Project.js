import React from 'react';
import "./style.css";

const Project = ({ id, url, name, description, index }) => (
  <div className={`col-md-4 col-sm-12 p-0`}>
    {/*<a href={url} className="project-link">*/}
    <div className={`project-${index}-background-color`}>
      <a href={url} className="project-link font-weight-bold">
        <div className={`project-content project-${index} p-1`}>
          <span className="project-link">{name}</span>
          <p className="message-description">{description}</p>
          {/*<div className="project-link">{name}</div>*/}
        </div>
      </a>
    </div>
    {/*</a>*/}
  </div>
);

export default Project;