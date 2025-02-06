// -------------------------->working using ws package
import http from "http";
import { WebSocketServer } from "ws";
import express from "express";

const app = express();
const port = 3000;

// Create HTTP server and attach Express
const server = http.createServer(app);

// Attach WebSocket server to the HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    console.log("Data from client:", data.toString());
    ws.send("Thanks buddy!");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
