import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TopBar from "../components/common/topbar";
import SideBar from "../components/common/sideBar";
import { userAction } from "../store/user";
import Users from "../components/users";
import { io } from "socket.io-client";
export default function Home() {
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let history = useHistory();
  let socket;
  const [activeUserrows, setrows] = React.useState([]);
 
  useEffect(
    function () {
      if (user.id == "xxxxxxxxxxxx") {
        return history.push("/");
        // let localUSer = localStorage.getItem("publicUserID");
        // if (typeof localUSer == "string") {
        //   let userObject = JSON.parse(localUSer);
        //   if (userObject.name != "") {
        //     dispatch(userAction.loaduser(userObject));
        //   }
        // }
        return;
      }
      //authenticate user
      socket = io("http://localhost:4000/publicData", {
        auth: { name: user.name, id: user.id },
      });

      socket.on("connect_error", function (data) {
        console.log("TC-ERROR !!!!!!!", data);
      });
      socket.on("active_clients", function (data) {
        setrows(data);
      });
    },
    [user]
  );

  return (
    <Fragment>
      <div id="wrapper"></div>
      <TopBar />
      <SideBar />
      <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <Users users={activeUserrows} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
