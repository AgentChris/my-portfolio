import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class Messages extends Component {
  node = null;

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.node) {
      this.node.scrollIntoView(false);
    }
  }

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
        <div className="message-scroll" ref={(node) => {
          this.node = node
        }} />
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  isTyping: state.chat.isTyping,
});

export default connect(mapStateToProps)(Messages);