import ChatEngine from "../components/chat/ChatEngine";
import {
  GREETING_STATE, CHANGE_CHAT_STATE, GET_IN_TOUCH_STATE, ADDING_MESSAGE_HERO, ADDING_MESSAGE,
  ADDING_OPTION, ANSWER_OPTION_EMAIL_CONTENT, ANSWER_OPTION_EMAIL, START_TYPING
} from './index';

const GreetIntent = "Greet.Intent";
const WORD_PER_MINUTE = 60;
const MINUTE = "6000"; // 60000 milliseconds

export const quitChatAction = () => {
  // close all options to choose, and input chat
};

export const emitAction = (chatState, intent) => (dispatch) => {
  //   redux cheage current state, call intent callback
  dispatch({ type: CHANGE_CHAT_STATE, chatState, intent });
  if (chatState === GREETING_STATE) {
    ChatEngine.handleGreetingState(intent)
  } else if (chatState === "GET_IN_TOUCH_STATE") {
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
    const words = text.split(" ");

    const timeToWrite = (words.length / WORD_PER_MINUTE) * MINUTE;
    dispatch({ type: START_TYPING });
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({ type: ADDING_MESSAGE, text, isTyping: false });
        resolve(text);
      }, timeToWrite);
    });
  }
};

export const askAction = (options) => {
  // adding options to redux state
  return (dispatch) => {
    dispatch({ type: ADDING_OPTION, options });
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
      dispatch({ type: ANSWER_OPTION_EMAIL, text });
    }
    if (optionId === "email_description") {
      text = customText;
      dispatch({ type: ANSWER_OPTION_EMAIL_CONTENT, text });
    }

    dispatch({ type: ADDING_MESSAGE_HERO, text });
    dispatch(emitAction(chatState, intent));
  };
};
