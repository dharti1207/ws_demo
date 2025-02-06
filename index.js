// It is socket io it is used in netwrok communication
// over to two machines to see diff in NodejsQuestion doc

import http from "http";
import { Server } from "socket.io";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Socket.IO Server running");
});

// Enable CORS for frontend clients
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (change this in production)
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected.");

  // Send a welcome message when connected
  // Send a message to the client
  socket.emit("message", "Hello from the server");

  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });
});

// Start server
server.listen(4080, () => {
  console.log("Server is running on port 4080");
});
