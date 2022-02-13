let appio = require("./../app");

exports.protected = function name(socket, next) {
  let authData = socket.handshake.auth;
  if (!authData.id || authData.id === "" || authData.id == "xxxxxxxxxxxx") {
    return next(new Error("user not identified"));
  }
  let io = appio.appio;

  if (!io.USER) {
    io.USER = [];
  }
  io.USER.push({
    authSocketid: socket.id,
    name: authData.name,
    id: authData.id,
  });

  next();
};

exports.disconnected = function name() {
  console.log("IN DISCONENCTED");
};
