import React from 'react';
import "./style.css";

const Project = ({ id, url, name, index }) => (
  <div className="col-md-4 col-sm-12 p-0">
    <div className={`project-wrapper c project-${index}`}>
      <a href={url}>{name}</a>
    </div>
  </div>
);

export default Project;