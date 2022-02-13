import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "./../../assets/logo.png";
import Logout from "./logoutHandler";
function TopBar(props) {
  let user = useSelector(function (store) {
    return store.user;
  });
  let [showNav, setShowNav] = useState(false);
  function toggeNav() {
    let body = document.body;
    if (showNav) {
      body.classList.remove("sidebar-enable");
      setShowNav(false);
    } else {
      body.classList.add("sidebar-enable");
      setShowNav(true);
    }
  }

  return (
    <div class="navbar-custom">
      <div class="logo-box ">
        <h3 class="logo logo-dark text-center">
          <img className="mt-2 img-fluid avatar-xl" src={logo} />
        </h3>
        <h3 class="logo logo-light text-center">
          <img className="mt-2 img-fluid avatar-xl" src={logo} />
        </h3>
      </div>
      <ul class="list-unstyled topnav-menu topnav-menu-left mb-0">
        <li>
          <button
            onClick={toggeNav}
            class="button-menu-mobile disable-btn waves-effect"
          >
            <i class="mdi mdi-menu"></i>
          </button>
        </li>

        <li>
          <h4 class="page-title-main">Dashboard</h4>
        </li>

        <li>
          <p class="page-title-main text-muted">Your User ID: {user.id}</p>
        </li>
      </ul>
      <ul class="list-unstyled topnav-menu float-right mb-0">
        <li class="page-title-main">
          <Logout />
        </li>
      </ul>
    </div>
  );
}
export default TopBar;
