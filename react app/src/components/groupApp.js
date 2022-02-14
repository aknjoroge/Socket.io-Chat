import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TopBar from "./common/topbar";
import SideBar from "./common/sideBar";
import { userAction } from "../store/user";

import { io } from "socket.io-client";
import JoinChat from "./joinChat";
import ChatApp from "./common/chatApp";
import AppGroups from "./groups";
import ChatBox from "./common/chatBox";
export default function Groups(props) {
  let { fullscreen } = props;
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let [inChat, setInChat] = useState(false);
  let [groupID, setGroupID] = useState("");
  let [hideView, sethideView] = useState(false);
  let history = useHistory();

  let [groups, setgroups] = useState([
    { name: "Java", id: "1" },
    { name: "Node.js", id: "2" },
    { name: "HTML", id: "3" },
    { name: "CSS", id: "4" },
  ]);

  let [messages, setMessages] = useState([
    {
      date: "adadad",
      userName: "dasda",
      userID: "dsada",
    },
  ]);
  useEffect(
    function () {
      if (user.id == "xxxxxxxxxxxx") {
        return history.push("/");
      }

      if (inChat && groupID != "") {
        let socket = io("http://localhost:4000/groups", {
          auth: { name: user.name, id: user.id },
        });
        socket.on("fromServer", function (data) {
          console.log("TC-GROUP", data);
        });
        socket.on("connect_error", function (data) {
          console.log("TC-22222", data);
        });

        setTimeout(() => {
          socket.emit("eventAQ", "data eventAQ data");
        }, 2000);
      }
    },
    [inChat, groupID]
  );

  useEffect(
    function () {
      sethideView(fullscreen && inChat); //true & false
    },
    [fullscreen, inChat]
  );

  function joinCB(data) {
    if (data.success) {
      setInChat(data.success);
      setGroupID(data.id);
    }
  }

  function setState(group) {
    setGroupID(group.id);
    setInChat(true);
    // socket.volatile.emit("join_group", group, joinCB);
  }

  let classses = { marginTop: fullscreen && inChat ? "0px" : "70px" };

  function addMessageHandler(data) {
    console.log("TC-88", data);
    // socket.volatile.emit("join_group_message", { data, groupID });
  }
  return (
    <Fragment>
      <div id="wrapper"></div>
      {!hideView && <TopBar />}

      <SideBar hideView={!hideView} />
      <div style={classses} class="content-page">
        <div class="content">
          <div class="container-fluid">
            {!inChat && <AppGroups setState={setState} groups={groups} />}
            {inChat && (
              <ChatBox
                type="group"
                fag={groupID}
                addMessageHandler={addMessageHandler}
                messages={messages}
                hideView={hideView}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
