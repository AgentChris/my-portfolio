import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

const AboutMe = ({}) => (
  <div className="">
    <div className="image-me"/>
    <p>Well nothing much to say....</p>
    <button type="button" className="btn btn-primary">Primary</button>
    <Button color="primary">primary</Button>
  </div>
);

export default AboutMe;