import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

const Messages = ({ messages = [], isTyping }) => (
  <ul className="d-flex flex-column p-0">
    {messages.map((message, index) => (
      <Message {...message} key={index} />
    ))}
    {isTyping ? <Message text={"..."} /> : null}
  </ul>
);

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  isTyping: state.chat.isTyping,
});

export default connect(mapStateToProps)(Messages);