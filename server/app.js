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

//require the middlware
let authMiddleware = require("./middleware/authMiddleware");
//require callback
let connection = require("./controller/loadAppData");

//Provide the client a socket ID, acts as our token
io.of("/provider").on("connection", (socket) => {
  let userName = socket.handshake.auth.userName;
  console.log("/provider connected ", "name: ", userName);
  if (userName) {
    socket.user = {
      userName,
      id: socket.id,
    };

    socket.emit("public_user", true);
    socket.emit("USER_ID", socket.id);
  }
});

//Define socket NameSpace
const appPublicData = io.of("/publicData");

//Example of a middleware
appPublicData.use(authMiddleware.protected);

//Read conencted socket stats
appPublicData.on("connection", connection.loadApp);
appPublicData.on("disconnect", authMiddleware.disconnected);

//Public response
function publicResponce(method, res) {
  res.json({
    application: "Socket.io Base Server",
    apiUrl: "/api/v1/",
    url: "https://public-socket.web.app/",
  });
}
app.get("/", function (req, res) {
  publicResponce("GET", res);
});
app.post("/", function (req, res) {
  publicResponce("POST", res);
});

app.use("*", function (req, res, next) {
  res.json({
    status: "failled",
    message: "Route not set",
  });
});

exports.appio = io;
module.exports = server;
