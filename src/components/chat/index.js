import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import ChatEngine from './ChatEngine';
import ChatInput from './ChatInput';
import { startChatAction } from "../../store/actions";

class Chat extends Component {
  node = null;

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.node) {
      this.node.scrollIntoView(false);
    }
  }

  componentDidMount() {
    this.props.startChat();
  }

  render() {
    return (
      <div className="chat-container">
        <Messages />
        <ChatInput />
        <ChatEngine />
        <div className="message-scroll" ref={(node) => {
          this.node = node
        }} />
        <p className="info-scroll text-center">
          <span className="mr-4">&#8595;</span>
          Scroll if you don't feel like talking
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isTyping: state.chat.isTyping,
});
const mapDispatchToProps = {
  startChat: startChatAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);