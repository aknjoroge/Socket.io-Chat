let appio = require("./../app");
let authMiddleware = require("./../middleware/authMiddleware");

let groups = [
  { name: "Java", id: "1" },
  { name: "Node.js", id: "2" },
  { name: "HTML", id: "3" },
  { name: "CSS", id: "4" },
];

exports.loadApp = function name(socket) {
  socket.on("disconnect", authMiddleware.disconnected);
  //start
  socket.emit("connected_success", true);
  const count = socket.server.engine.clientsCount;

  let io = appio.appio;
  let appPublicData = appio.appPublicData;

  appPublicData.emit("active_clients", io.USER);
};
exports.publicChat = function name(socket) {
  socket.on("disconnect", authMiddleware.disconnected);
  //start
};

exports.loadGroups = function name(socket) {
  console.log("TC-655", "groupConnection");
  socket.join("one");

  socket.on("eventAQ", function (data) {
    console.log("REQuestt", data);
    socket.to("one").emit("fromServer", "welcome to gorup");
  });
};
