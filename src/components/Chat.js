import React from 'react';
import Message from './Message';

const messages = [
  { text: "hello there i am Chris", hero: false },
  { text: "I hope your are doing well today", hero: false },
  { text: "yeah i am fine", hero: true },
  { text: "Are you excited about product development?", hero: false },
  { text: "I hope so, together we might build epic stuff", hero: false },
  { text: "Let's do this dwag", hero: true },
];

const Chat = ({}) => (
  <ul className="d-flex flex-column p-0">
    {messages.map((message) => (
      <Message {...message} />
    ))}
  </ul>
);

export default Chat;