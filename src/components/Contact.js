import React from 'react';
import "./style.css";
//{/*<form method="POST" action="https://formspree.io/poputeacristi@gmail.com" onSubmit={() => {*/
//}

// simple contact from maybe integrated with about idk
const Contact = ({}) => (
  <form method="POST" action="https://formspree.io/poputeacristi@gmail.com" onSubmit={(e) => {
    e.preventDefault();
  }}>
    <h2>Contact me</h2>
    <div className="container contact-me">
      <div className="row m-0">
        <div className="col-sm-12 col-md-6 p-2">
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" className="form-control mb-4" />
            <input type="email" name="email" placeholder="Email" className="form-control" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-2">
          <div className="form-group">
            <textarea name="message" placeholder="Message" className="form-control text-area" />
          </div>
        </div>
      </div>
      <div className="row col-sm-12">
        <button type="submit" className="btn-block btn-primary btn-submit">Submit</button>
      </div>
    </div>
  </form>
);

export default Contact;