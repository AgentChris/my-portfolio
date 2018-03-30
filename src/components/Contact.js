import React from 'react';
import "./style.css";

// simple contact from maybe integrated with about idk
const Contact = ({}) => (
  <div>
    <h2>Contact me</h2>
    <div className="container contact-me">
      <div className="row m-0">
        <div className="col-sm-12 col-md-6 p-2">
          <div className="form-group">
            <input type="text" placeholder="Subject" className="form-control mb-4" />
            <input type="text" placeholder="Email" className="form-control" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-2">
          <div className="form-group">
            <textarea placeholder="Message" className="form-control text-area" />
          </div>
        </div>
      </div>
      <div className="row col-sm-12">
        <button className="btn-block btn-primary btn-submit">Submit</button>
      </div>
    </div>
  </div>
);

export default Contact;