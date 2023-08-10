import io from "socket.io-client";
import "./App.css";
import { useState, useEffect } from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Footer from "./components/Footer";

//* backend connection
const socket = io("/");

function App() {
  <div className="main-container">
    <Header />
    <Chat />
    <Footer />
  </div>;
}

export default App;
