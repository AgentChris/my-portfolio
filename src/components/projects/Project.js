import React from 'react';
import "./style.css";

const Project = ({ id, url, name, description, index }) => (
  <div className={`col-md-4 col-sm-12 p-0 project-${index}`}>
    <div className={`project-wrapper c project-${index} p-1`}>
      <a href={url} className="project-link">{name}</a>
      <p className="message-description">{description}</p>
      {/*<div className="project-link">{name}</div>*/}
    </div>
  </div>
);

export default Project;