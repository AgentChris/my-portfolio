import React from 'react';

const AboutMe = ({}) => (
  <div className="row align-items-center m-0 about-me">
    <div className="col-sm-12 col-md-4">
      <div className="d-flex justify-content-center image-me" />
    </div>
    <div className="col-sm-12 col-md-8 mt-4 mt-md-0">
      <div className="font-italic">
        Embarked on an adventure in 2009 (good old days) that supports people in achieving their dreams, which consists
        in either building comprehensive apps or helping them become better fullstack software developers.
      </div>
      <div className="mt-4">
        <div className="d-block d-sm-none">Currently working at:</div>
        <div className="d-flex flex-wrap">
          <div className="d-none d-sm-block">Currently working at:&nbsp;</div>
          <div className="d-flex align-items-center">
            <div className="qc-icon" />
            &nbsp;on&nbsp;<span className="ng-icon-ngs" />&nbsp;Nat Geo projects
          </div>
        </div>
        <div className="d-block d-sm-none mt-2">Stacked used:</div>
        <div className="d-flex justify-content-between stacks mt-sm-2">
          <div className="d-none d-sm-block">Stacked used:</div>
          <div className="icon-size python-icon" />
          <div className="icon-size django-icon" />
          <div className="icon-size js-icon" />
          <div className="icon-size typescript-icon" />
          <div className="icon-size redux-icon" />
          <div className="icon-size react-icon" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;