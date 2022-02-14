import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TopBar from "../components/common/topbar";
import SideBar from "../components/common/sideBar";
import { userAction } from "../store/user";

import { io } from "socket.io-client";
import JoinChat from "./joinChat";
import ChatApp from "./common/chatApp";
import API_ULR from "../store/var";
export default function PublicChat(props) {
  let { fullscreen } = props;
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let [inChat, setInChat] = useState(false);
  let [socket, setSocket] = useState({});
  let [joinState, setjoinState] = useState();
  let [hideView, sethideView] = useState(false);
  let history = useHistory();

  useEffect(function () {
    if (user.id == "xxxxxxxxxxxx") {
      return history.push("/");
    }
    //authenticate user
    if (!socket.connected) {
      let conn = io(`${API_ULR}/chat`, {
        auth: { name: user.name, id: user.id },
      });
      conn.on("connect_error", function (data) {
        console.log("TC-ERROR 1 !!!!!!!", data);
        setSocket({});
      });
      conn.on("Not_In_Chat", function (data) {
        if (!data) {
          return setInChat(false);
        }
        setSocket(conn);
        setInChat(data);
      });
    }
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

  function joinCallback(data) {
    setjoinState(data);
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
            {!inChat && <JoinChat cb={joinCallback} setState={setState} />}
            {inChat && (
              <ChatApp
                joinState={joinState}
                hideView={!hideView}
                setState={setState}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
