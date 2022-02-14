//requiring express node js module
let express = require("express");
//initialize express
let app = express();
//require https module
const http = require("http");
//initialize a server
const server = http.createServer(app);
// import socket server
let { Server } = require("socket.io");
//initialize socket io
let io = new Server(server, {
  cors: { origin: ["http://localhost:3000", "http://localhost"] },
});
let groups = [
  { name: "Java", id: "1" },
  { name: "Node.js", id: "2" },
  { name: "HTML", id: "3" },
  { name: "CSS", id: "4" },
];

io.of("/groups").on("connection", (socket) => {
  console.log("TC-655", "groupConnection");
});
