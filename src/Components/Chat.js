import React, { useEffect, useState } from 'react';
import './Chat.scss';

const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  let user = window.localStorage.getItem('booklub');
  const token = JSON.parse(user).userToken;

  useEffect(() => {
    fetch(`http://localhost:3000/messages/get_messages/${props.user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    })
      .then((resp) => resp.json())
      .then((messages) => setMessages(messages));
  }, []);

  console.log(messages);
  console.log(props.user.id);

  const renderMessages = () => {
    return messages.map((message) => {
      // if the message was sent by the other user (in this case the recipient ID would match their id)
      if (message.recipient_id == props.user.id) {
        return (
          <div class="message message-personal">
            {message.content}
            <div class="timestamp">
              {message.created_at.split('T')[0]},{' '}
              {message.created_at.split('T')[1].split('.')[0]}
            </div>
          </div>
        );
      } else {
        return (
          <div class="message new">
            <figure class="avatar">
              <img src={props.user.image_url} />
            </figure>
            {message.content}
            <div class="timestamp">
              {message.created_at.split('T')[0]},{' '}
              {message.created_at.split('T')[1].split('.')[0]}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <>
      <div class="chat">
        <div class="chat-title">
          <h1>{props.user.name}</h1>
          <figure class="avatar">
            <img src={props.user.image_url} />
          </figure>
        </div>
        <div class="messages">
          <div class="messages-content">{renderMessages()}</div>
        </div>
        <div class="message-box">
          <textarea
            type="text"
            class="message-input"
            placeholder="Type message..."
          ></textarea>
          <button type="submit" class="message-submit">
            Send
          </button>
        </div>
      </div>
      <div class="bg"></div>
    </>
  );
};

export default Chat;
