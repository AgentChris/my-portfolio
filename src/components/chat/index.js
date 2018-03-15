import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import ChatEngine from './ChatEngine';
import ChatInput from './ChatInput';
import { startChatAction } from "../../store/actions";

class Chat extends Component {
  componentDidMount() {
    this.props.startChat();
  }

  render() {
    return (
      <div>
        <Messages />
        <ChatInput />
        <ChatEngine />
      </div>);
  }
}

const mapDispatchToProps = {
  startChat: startChatAction
};

export default connect(null, mapDispatchToProps)(Chat);