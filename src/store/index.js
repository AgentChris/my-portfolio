import { getInTouchState, greetingStateHandler } from "../components/chat/stateHandlers";

const GREETING_STATE = 'GREETING_STATE';
const GET_IN_TOUCH_STATE = 'GET_IN_TOUCH_STATE';

const ADDING_MESSAGE = "ADDING_MESSAGE";
const ADDING_OPTION = "ADDING_OPTION";
const ADDING_MESSAGE_HERO = "ADDING_MESSAGE_HERO";
const ANSWER_OPTION_3 = "ANSWER_OPTION_3";
const ANSWER_OPTION_4 = "ANSWER_OPTION_4";
const CHANGE_CHAT_STATE = "CHANGE_CHAT_STATE";

const GreetIntent = "Greet.Intent";

// const emitAction = (newState, intent) => {
//   // redux cheage current state, call intent callback
//   if (!newState) {
//     // just call intent callback
//   }
// };
export const emitAction = (state, intent) => {
  // redux cheage current state, call intent callback
  if (state === GREETING_STATE) {
    greetingStateHandler[intent]();
  } else if (state === GET_IN_TOUCH_STATE) {
    getInTouchState[intent]();
  }
};

export const quitChatAction = () => {
  // close all options to choose, and input chat
};

export const startChatAction = () => {
  return (dispatch) => {
    dispatch({ type: CHANGE_CHAT_STATE, state: GREETING_STATE, intent: GreetIntent });
  }
};

export const tellAction = ({ text }) => {
  // adding meesages to redux state
  return (dispatch) => {
    dispatch({ type: ADDING_MESSAGE, text });
  }
};

export const askAction = (options, { state, intent }) => {
  // adding options to redux state
  return (dispatch) => {
    dispatch({ type: ADDING_OPTION, options });
    dispatch({ type: CHANGE_CHAT_STATE, state: state, intent: intent })
  };
};

export const chooseOptionAction = (optionId, customText) => {
  return (dispatch, getState) => {
    const { options } = getState();

    const { state, intent, ...remainingProps } = options.find(({ id }) => (id === optionId));

    let text = remainingProps.text;
    if (optionId === "3") {
      text = customText;
      dispatch({ type: ANSWER_OPTION_3, text });
    }
    if (optionId === "4") {
      text = customText;
      dispatch({ type: ANSWER_OPTION_4, text });
    }

    dispatch({ type: ADDING_MESSAGE_HERO, text });
    dispatch({ type: CHANGE_CHAT_STATE, state, intent });
  };
};


export const reducer = (state = { messages: [], chatState: GREETING_STATE }, action) => {
  switch (action.type) {
    case ADDING_MESSAGE:
      return { ...state, messages: [...state.messages, { text: action.text, hero: false }] };
    case ADDING_OPTION:
      return { ...state, options: action.options };
    case ADDING_MESSAGE_HERO:
      return { ...state, messages: [...state.messages, { text: action.text, hero: true }] };
    case ANSWER_OPTION_3:
      return { ...state, emailContent: action.text };
    case ANSWER_OPTION_4:
      return { ...state, email: action.text };
    case CHANGE_CHAT_STATE:
      const chatState = action.chatState || state.chatState;

      emitAction(chatState, action.intent);

      return { ...state, chatState, intent: action.intent };
    default:
      return state;
  }
};