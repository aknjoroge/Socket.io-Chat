let appio = require("./../app");

let publicSpace = "PublicChat";

exports.protected = function name(socket, next) {
  let authData = socket.handshake.auth;
  if (!authData.id || authData.id === "" || authData.id == "xxxxxxxxxxxx") {
    return next(new Error("user not identified"));
  }
  let io = appio.appio;

  if (!io.USER) {
    io.USER = [];
  }

  let useOnline = io.USER.filter(function (item) {
    return item.id == authData.id;
  });
  if (useOnline.length == 0) {
    let options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "long",
      day: "numeric",
    };
    let curentdate = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );

    io.USER.push({
      authSocketid: socket.id,
      name: authData.name,
      id: authData.id,
      date: curentdate,
    });
  }

  next();
};

exports.disconnected = function name(socket) {
  let io = appio.appio;
  let appPublicData = appio.appPublicData;
  let activeSockets = appPublicData.adapter.rooms;
  let activeKeys = [];
  for (const [key, value] of activeSockets) {
    activeKeys.push(key);
  }

  let currentSockets = io.USER.filter(function (element) {
    return activeKeys.includes(element.authSocketid);
  });

  io.USER = currentSockets;
  appPublicData.emit("active_clients", io.USER);
};

exports.publicProtected = function name(socket, next) {
  let authData = socket.handshake.auth;
  if (!authData.id || authData.id === "" || authData.id == "xxxxxxxxxxxx") {
    return socket.emit("user_not_authenticated", false);
  }
  let io = appio.appio;

  if (!io.PUBLIC_USER) {
    io.PUBLIC_USER = [];
  }

  let inPublicChat = io.PUBLIC_USER.filter(function (item) {
    return item.id == authData.id;
  });

  if (inPublicChat.length == 0) {
    socket.emit("Not_In_Chat", false);
  } else {
    socket.emit("Not_In_Chat", true);
    socket.join(publicSpace);
  }
};

exports.subscribe = function name(socket, next) {
  let authData = socket.handshake.auth;
  if (!authData.id || authData.id === "" || authData.id == "xxxxxxxxxxxx") {
    return socket.emit("user_not_authenticated", false);
  }

  let io = appio.appio;

  if (!io.PUBLIC_USER) {
    io.PUBLIC_USER = [];
  }

  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    month: "long",
    day: "numeric",
  };
  let curentdate = new Intl.DateTimeFormat("en-US", options).format(new Date());

  io.PUBLIC_USER.push({
    authSocketid: socket.id,
    name: authData.name,
    id: authData.id,
    date: curentdate,
  });
  console.log("tC-877", io.PUBLIC_USER);
  socket.emit("Not_In_Chat", true);
};
