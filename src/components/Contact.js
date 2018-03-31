import React, { Component } from 'react';
import Api from '../utils/Api';
import "./style.css";

const SHOW_CONFIRMATION_MESSAGE = 5000;

// simple contact from maybe integrated with about idk
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { showConfirmation: false };
  }

  render() {
    const { isSuccess, showConfirmation } = this.state;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const email = this.email.value;
        const subject = this.subject.value;
        const message = this.message.value;

        this.email.value = "";
        this.subject.value = "";
        this.message.value = "";

        Api.sendEmail({ email, subject, message }).then(() => {
          this.setState({ isSuccess: true, showConfirmation: true });
          setTimeout(() => {
            this.setState({ showConfirmation: false });
          }, SHOW_CONFIRMATION_MESSAGE);
        }).catch(() => {
          this.setState({ isSuccess: false, showConfirmation: true });
          setTimeout(() => {
            this.setState({ showConfirmation: false });
          }, SHOW_CONFIRMATION_MESSAGE);
        });
      }}>
        <h2>Contact me</h2>
        <div className="container contact-me">
          <div className="row m-0">
            <div className="col-sm-12 col-md-6 p-2">
              <div className="form-group">
                <input ref={(node) => {
                  this.subject = node;
                }} type="text" name="subject" placeholder="Subject"
                       className="form-control mb-4" required />
                <input ref={(node) => {
                  this.email = node;
                }} type="email" name="email" placeholder="Email"
                       className="form-control" required />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 p-2">
              <div className="form-group">
            <textarea ref={(node) => {
              this.message = node;
            }} name="message" placeholder="Message" className="form-control text-area" required />
              </div>
            </div>
          </div>
          <div className="row col-sm-12">
            <button type="submit" className="btn-block btn-primary btn-submit">Submit</button>
          </div>
          <div className="row col-sm-12 mt-3">
            {showConfirmation ? (
              isSuccess ?
                <div className="alert alert-success confirmation-message">
                  <strong>Message successfully sent</strong>
                </div> :
                <div className="alert alert-info confirmation-message">
                  <strong>Message unsuccessfully sent</strong>
                </div>
            ) : null}
          </div>
        </div>
      </form>
    );
  }
}

export default Contact;