import React from 'react';

const MessageComponent = ({ text, hero }) => (
  <li className={"message " + (hero ? "hero" : "")}>
    <p>{text}</p>
  </li>
);

export default MessageComponent;