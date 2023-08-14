import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { pool } from "../db/db.js";

const app = express();

// http server
const server = http.createServer(app);

// socket server
const io = new SocketServer(server);

// when client makes a connection
io.on("connection", (socket) => {
  console.log(socket.id);

  // Comes from Frontend
  socket.on("message", async(body) => {
    try {
      //store messages in db
      const [result] = await pool.query(
        "INSERT INTO messages (body, from_socket) VALUES (?, ?)",
        [body, socket.id.slice(6)]
      )

      console.log("Message saved: ", result.insertId);

      // Send message and author from backend
      socket.broadcast.emit("message", {
        body,
        from: socket.id.slice(6),
      });
    } catch (err) {
      console.log("Error saving message in DB", err);
    }
  });
});

server.listen(4000);
console.log("Server on port: ", 4000);
