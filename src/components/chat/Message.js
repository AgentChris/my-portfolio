import React from 'react';

const MessageComponent = ({ text, hero }) => (
  <li className={"message " + (hero ? "hero" : "")}>
    <p dangerouslySetInnerHTML={{ __html: `${text}` }} />
  </li>
);

export default MessageComponent;