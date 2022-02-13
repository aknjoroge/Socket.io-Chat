import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TopBar from "../components/common/topbar";
import SideBar from "../components/common/sideBar";
import { userAction } from "../store/user";
import Users from "../components/users";
export default function Home() {
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let history = useHistory();

  useEffect(
    function () {
      if (user.id == "xxxxxxxxxxxx") {
        // return history.push("/");
        let localUSer = localStorage.getItem("publicUserID");
        if (typeof localUSer == "string") {
          let userObject = JSON.parse(localUSer);
          if (userObject.name != "") {
            dispatch(userAction.loaduser(userObject));
          }
        }
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
              <Users/>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}
