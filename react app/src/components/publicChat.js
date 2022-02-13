import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TopBar from "../components/common/topbar";
import SideBar from "../components/common/sideBar";
import { userAction } from "../store/user";

import { io } from "socket.io-client";
import JoinChat from "./joinChat";
import ChatApp from "./common/chatApp";
export default function PublicChat(props) {
  let { fullscreen } = props;
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let [inChat, setInChat] = useState(false);
  let [hideView, sethideView] = useState(false);
  let history = useHistory();
  let socket;

  useEffect(function () {
    if (user.id == "xxxxxxxxxxxx") {
      return history.push("/");
    }
    //authenticate user

    socket = io("http://localhost:4000/chat", {
      auth: { name: user.name, id: user.id },
    });
    socket.on("connect_error", function (data) {
      console.log("TC-ERROR 1 !!!!!!!", data);
    });

    socket.on("Not_In_Chat", function (data) {
      console.log("TC-8878", data);
      if (!data) {
        return setInChat(false);
      }
      setInChat(data);
    });
  }, []);

  useEffect(
    function () {
      sethideView(fullscreen && inChat); //true & false
    },
    [fullscreen, inChat]
  );

  function setState(data) {
    if (data) {
      setInChat(data);
    }
  }

  let classses = { marginTop: fullscreen && inChat ? "0px" : "70px" };

  return (
    <Fragment>
      <div id="wrapper"></div>
      {!hideView && <TopBar />}

      <SideBar hideView={!hideView} />
      <div style={classses} class="content-page">
        <div class="content">
          <div class="container-fluid">
            {!inChat && <JoinChat setState={setState} />}
            {inChat && <ChatApp  hideView={!hideView} setState={setState} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
