import React from 'react';
import "./style.css";

const Project = ({ id, url, name, index }) => (
  <div className="col-md-4 col-sm-12 p-0">
    <div className={`project-wrapper c project-${index}`}>
      <a href={url} className="project-link">{name}</a>
      {/*<div className="project-link">{name}</div>*/}
    </div>
  </div>
);

export default Project;