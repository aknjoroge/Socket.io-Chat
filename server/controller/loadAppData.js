let appio = require("./../app");
exports.loadApp = function name(socket) {
  const count = socket.server.engine.clientsCount;
  let io = appio.appio;

  console.log("TC-656", io.USER);
  console.log("TC-656", io.USER.length);
  // console.log("TC-66", socket.id);
  // console.log("TC-66", "Total", count);
  console.log("TC-66", socket.adapter.sockets(1));
  // console.log("TC-66", socket.adapter);
  // console.log("TC-66", "Users", socket.users);

  socket.on("event", function (args) {
    //
  });
};
