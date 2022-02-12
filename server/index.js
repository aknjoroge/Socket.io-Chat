const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
let { Server } = require("socket.io");

let port = 4000;

let io = new Server(server);
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});