import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

const Messages = ({ messages = [] }) => (
  <ul className="d-flex flex-column p-0">
    {messages.map((message, index) => (
      <Message {...message} key={index} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps)(Messages);