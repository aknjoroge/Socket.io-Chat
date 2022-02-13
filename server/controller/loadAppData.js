let appio = require("./../app");
let authMiddleware = require("./../middleware/authMiddleware");
exports.loadApp = function name(socket) {
  socket.on("disconnect", authMiddleware.disconnected);
  //start
  const count = socket.server.engine.clientsCount;

  let io = appio.appio;
  let appPublicData = appio.appPublicData;

  appPublicData.emit("active_clients", io.USER);
};
exports.publicChat = function name(socket) {
  socket.on("disconnect", authMiddleware.disconnected);
  //start
};
