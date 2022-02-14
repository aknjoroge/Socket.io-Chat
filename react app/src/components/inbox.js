import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";

import TopBar from "./common/topbar";
import SideBar from "./common/sideBar";

import { io } from "socket.io-client";

import ChatBox from "./common/chatBox";
import API_ULR from "../store/var";
export default function InboxApp(props) {
  let { fullscreen } = props;

  let params = useParams();
  let user = useSelector(function (store) {
    return store.user;
  });

  let [chatID, setchatID] = useState();
  let [socket, setSocket] = useState({});
  let [hideView, sethideView] = useState(false);
  let history = useHistory();

  let [messages, setMessages] = useState([]);
  useEffect(function () {
    if (user.id == "xxxxxxxxxxxx") {
      return history.push("/");
    }
    setchatID(params.id);
  }, []);
  useEffect(
    function () {
      if (chatID) {
        if (!socket.connected) {
          let conn = io(`${API_ULR}/inbox`, {
            auth: { name: user.name, id: user.id, chatID },
          });
          conn.on("connect_error", function (data) {
            console.log("TC-ERROR 1 !!!!!!!", data);
            setSocket({});
          });
          conn.on("new_private_message", function (data) {
            console.log("TC-23232323", data);
          });

          setSocket(conn);
        }
      }
    },
    [chatID]
  );

  useEffect(
    function () {
      sethideView(fullscreen && true); //true & false
    },
    [fullscreen]
  );

  let classses = { marginTop: fullscreen && true ? "0px" : "70px" };

  function messageReceived(response) {
    if (response.status == "success") {
      setMessages(function name(prevData) {
        return [...prevData, response.data];
      });
    }
  }
  function addMessageHandler(data) {
    socket.emit("private_message", data, chatID, messageReceived);
  }
  return (
    <Fragment>
      <div id="wrapper"></div>
      {!hideView && <TopBar />}

      <SideBar hideView={!hideView} />
      <div style={classses} class="content-page">
        <div class="content">
          <div class="container-fluid">
            <ChatBox
              type="Private Chat"
              fag={chatID}
              addMessageHandler={addMessageHandler}
              messages={messages}
              hideView={hideView}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
