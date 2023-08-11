import React from "react";
import io from "socket.io-client";
import { useState, useEffect } from "react";

//* backend connection
const socket = io("/");

function Chat() {
  // state for user message
  const [message, setMessage] = useState("");
  // state for all messages
  const [messages, setMessages] = useState([]);

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    // save messages to see them
    setMessages([...messages, newMessage]);
    // send to backend
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("message", receiveMessage);

    // aif we refresh or we change the tab, then socket event turns off
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  // save previous state. To update without start from 0 again
  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <div className="Chat w-full">
      <div className="container mx-auto h-full">
        {/* Message list */}
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              {message.from} : {message.body}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="message-form text-center">
          <input
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
