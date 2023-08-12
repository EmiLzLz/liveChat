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
    <div className="Chat w-full h-full">
      <div className="container mx-auto h-full flex-col items-center py-10">
        {/* Message list */}
        <div className="messages w-full h-4/5 overflow-y-scroll p-4">
          <ul>
            {messages.map((message, i) => (
              <li
                key={i}
                className={`text message p-3 rounded-lg text-white w-3/5 my-2 ${
                  message.from === "Me" ? "bg-[#CC2936] ml-auto" : "bg-black"
                }`}
              >
                <p className="smallText italic font-semibold">{message.from}</p>
                <p className="text font-medium">{message.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="message-form flex items-center justify-between text-cente pb-1"
        >
          <input
            className="text w-full py-1"
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="smallText send-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
