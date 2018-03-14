import React, { Component } from 'react';
import PropTypes from "proptypes";
import { connect } from 'react-redux';
import { validateEmail, } from '../../utils';
import * as actions from "../../store/actions";

import { greetingStateHandler, getInTouchState } from "./stateHandlers";

const propTypes = {
  tell: PropTypes.func.isRequired,
  ask: PropTypes.func.isRequired,
  quitChat: PropTypes.func.isRequired,
};

class ChatEngine extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.bindHandlers(greetingStateHandler);
    this.bindHandlers(getInTouchState);
  }

  bindHandlers = (stateHandler) => {
    const { ask, tell, emit, quitChat, state } = this.props;

    stateHandler.state = state;
    stateHandler.tell = tell;
    stateHandler.ask = ask;
    stateHandler.emit = emit;
    stateHandler.quitChat = quitChat;
  };

  static handleGreetingState = (intent) => {
    greetingStateHandler[intent]();
  };

  static handleGetInTouchState = (intent) => {
    getInTouchState[intent]();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.emailIsValid !== this.props.emailIsValid) {
      this.bindHandlers(greetingStateHandler, getInTouchState);
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => (  {
  state: {
    emailIsValid: validateEmail(state.email)
  }
});

const mapDispatchToProps = {
  tell: actions.tellAction,
  ask: actions.askAction,
  quitChat: actions.quitChatAction,
  emit: actions.emitAction
};

ChatEngine.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ChatEngine);