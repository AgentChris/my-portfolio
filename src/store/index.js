import { emitAction } from "../utils";

export const GREETING_STATE = 'GREETING_STATE';
export const GET_IN_TOUCH_STATE = 'GET_IN_TOUCH_STATE';

export const ADDING_MESSAGE = "ADDING_MESSAGE";
export const ADDING_OPTION = "ADDING_OPTION";
export const START_TYPING = "START_TYPING";
export const ADDING_MESSAGE_HERO = "ADDING_MESSAGE_HERO";
export const ANSWER_OPTION_EMAIL_CONTENT = "ANSWER_OPTION_EMAIL_CONTENT";
export const ANSWER_OPTION_EMAIL = "ANSWER_OPTION_EMAIL";
export const CHANGE_CHAT_STATE = "CHANGE_CHAT_STATE";

// const emitAction = (newState, intent) => {
//   // redux cheage current state, call intent callback
//   if (!newState) {
//     // just call intent callback
//   }
// };


export const reducer = (state = { messages: [], chatState: GREETING_STATE, isTyping: true }, action) => {
  switch (action.type) {
    case START_TYPING:
      return { ...state, isTyping: true };
    case ADDING_MESSAGE:
      return { ...state, isTyping: false, messages: [...state.messages, { text: action.text, hero: false }] };
    case ADDING_OPTION:
      return { ...state, options: action.options };
    case ADDING_MESSAGE_HERO:
      return { ...state, messages: [...state.messages, { text: action.text, hero: true }] };
    case ANSWER_OPTION_EMAIL_CONTENT:
      return { ...state, emailContent: action.text };
    case ANSWER_OPTION_EMAIL:
      return { ...state, email: action.text };
    case CHANGE_CHAT_STATE:
      const chatState = action.chatState || state.chatState;
      return { ...state, chatState, intent: action.intent };
    default:
      return state;
  }
};