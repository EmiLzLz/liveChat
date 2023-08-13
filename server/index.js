import express  from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const app = express();
// servidor http
const server = http.createServer(app);
// servidor socket
const io = new SocketServer(server);

// when client makes a connection
io.on("connection", socket => {
    console.log(socket.id);

    // Comes from Frontend
    socket.on("message", (body) => {
        //store messages in db
        
        // Send message and author from backend
        socket.broadcast.emit("message", {
            body,
            from: socket.id.slice(6),
        })
    })
})

server.listen(4000);
console.log("Server on port: ", 4000)