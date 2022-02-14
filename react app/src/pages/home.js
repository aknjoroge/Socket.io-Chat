import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TopBar from "../components/common/topbar";
import SideBar from "../components/common/sideBar";
import Users from "../components/users";
import { io } from "socket.io-client";
export default function Home(props) {
  let dispatch = useDispatch();
  let { cb } = props;
  let [socket, setSocket] = useState({});
  let user = useSelector(function (store) {
    return store.user;
  });
  let history = useHistory();

  const [activeUserrows, setrows] = React.useState([]);

  useEffect(
    function () {
      if (user.id == "xxxxxxxxxxxx") {
        return history.push("/");
      }
      if (!socket.connected) {
        //authenticate user
        let conn = io("http://localhost:4000/publicData", {
          auth: { name: user.name, id: user.id },
        });
        conn.on("connect_error", function (data) {
          console.log("TC-ERROR 2 !!!!!!!", data);
          setSocket({});
        });
        conn.on("connected_success", function (data) {
          setSocket(conn);
          cb(conn);
        });

        conn.on("active_clients", function (data) {
          setrows(data);
        });
      }
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
