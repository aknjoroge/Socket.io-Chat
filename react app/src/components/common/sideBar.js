import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar(props) {
  let { hideView = true } = props;
 
  let user = useSelector(function (store) {
    return store.user;
  });
  let classses = {
    top: hideView ? "70px;" : "0px",
  };



  return (
    <div style={classses} class="left-side-menu">
      <div class="slimscroll-menu">
        <div class="user-box text-center">
          <hr />

          <p class="text-muted m-0 p-0">{user.name}</p>

          <ul class="list-inline">
            <li class="list-inline-item">
              <a  href="#">
                <i  class="mdi mdi-power"></i>
              </a>
            </li>
          </ul>
        </div>

        <div id="sidebar-menu">
          <ul class="metismenu" id="side-menu">
            <li class="menu-title">Navigation</li>

            <li>
              <Link to="/online">
                <i class="mdi mdi-cloud-sync"></i>
                <span> ONLINE USERS </span>
              </Link>
            </li>
            <li>
              <Link to="/public">
                <i class="mdi mdi-earth"></i>
                <span> PUBLIC CHAT </span>
              </Link>
            </li>
            <li>
              <Link to="/groups">
                <i class="mdi mdi-account-group"></i>
                <span> Join Groups </span>
              </Link>
            </li>
            <li>
              <Link to="/inbox">
                <i class="mdi mdi-chat"></i>
                <span> Inbox </span>
              </Link>
            </li>

            <li>
              <a href="javascript: void(0);">
                <i class="mdi mdi-page-layout-sidebar-left"></i>
                <span> Technologies </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="nav-second-level" aria-expanded="false">
                <li>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="https://socket.io/get-started/chat"
                  >
                    Socket.io
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                    href="https://getbootstrap.com/"
                  >
                    Bootstrap
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
  );
}
export default SideBar;
