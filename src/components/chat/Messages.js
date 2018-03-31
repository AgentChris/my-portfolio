import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class Messages extends Component {
  render() {
    const { messages = [], isTyping } = this.props;
    return (
      <ul className="d-flex flex-column p-0">
        {messages.map((message, index) => (
          <Message {...message} key={index} />
        ))}
        {isTyping ?
          <div className="message">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div> : null}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  isTyping: state.chat.isTyping,
});

export default connect(mapStateToProps)(Messages);