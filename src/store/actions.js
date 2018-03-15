import ChatEngine from "../components/chat/ChatEngine";
import {
  GREETING_STATE, CHANGE_CHAT_STATE, GET_IN_TOUCH_STATE, ADDING_MESSAGE_HERO, ADDING_MESSAGE,
  ADDING_OPTION, ANSWER_OPTION_EMAIL_CONTENT, ANSWER_OPTION_EMAIL
} from './index';

const GreetIntent = "Greet.Intent";

export const quitChatAction = () => {
  // close all options to choose, and input chat
};

export const emitAction = (state, intent) => (dispatch) => {
  //   redux cheage current state, call intent callback
  dispatch({ type: CHANGE_CHAT_STATE, state, intent });
  if (state === GREETING_STATE) {
    ChatEngine.handleGreetingState(intent)
  } else if (state === GET_IN_TOUCH_STATE) {
    ChatEngine.handleGetInTouchState(intent)
  }
};

export const startChatAction = () => {
  return (dispatch) => {
    dispatch(emitAction(GREETING_STATE, GreetIntent));
  }
};

export const tellAction = ({ text }) => {
  // adding meesages to redux state
  return (dispatch) => {
    dispatch({ type: ADDING_MESSAGE, text });
  }
};

export const askAction = (options, { state, intent } = {}) => {
  // adding options to redux state
  return (dispatch) => {
    dispatch({ type: ADDING_OPTION, options });
    dispatch(emitAction(state, intent));
  };
};

export const chooseOptionAction = (optionId, customText) => {
  return (dispatch, getState) => {
    let { options, chatState, intent } = getState().chat;

    const option = options.find(({ id }) => (id === optionId));

    if (option.state) {
      chatState = option.state;
    }

    if (option.intent) {
      intent = option.intent;
    }

    let text = option.text;
    if (optionId === "email") {
      text = customText;
      dispatch({ type: ANSWER_OPTION_EMAIL_CONTENT, text });
    }
    if (optionId === "email_description") {
      text = customText;
      dispatch({ type: ANSWER_OPTION_EMAIL, text });
    }

    dispatch({ type: ADDING_MESSAGE_HERO, text });
    dispatch(emitAction(chatState, intent));
  };
};
