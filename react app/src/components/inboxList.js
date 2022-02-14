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
import InboxTable from "./inboxTable";
export default function InboxList(props) {
  let { fullscreen, connector } = props;
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let [joinState, setjoinState] = useState();
  let [inChat, setInChat] = useState(false);
  let [groupID, setGroupID] = useState("");
  let [socket, setsocket] = useState("");
  let [hideView, sethideView] = useState(false);
  let history = useHistory();

  let [message, setMessages] = useState([]);
  useEffect(
    function () {
      if (user.id == "xxxxxxxxxxxx") {
        return history.push("/");
      }

      connector.on("new_private_message", function (response) {
        
        setMessages(function name(prevData) {
          return [...prevData, response];
        });
      });
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

  function messageReceived(response) {
    if (response.status == "success") {
      setMessages(function name(prevData) {
        return [...prevData, response.data];
      });
    }
  }
  function addMessageHandler(data) {
    socket.emit("new_private_group_message", data, groupID, messageReceived);
  }
  return (
    <Fragment>
      <div id="wrapper"></div>
      {!hideView && <TopBar />}

      <SideBar hideView={!hideView} />
      <div style={classses} class="content-page">
        <div class="content">
          <div class="container-fluid">
            <InboxTable setState={setState} message={message} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
