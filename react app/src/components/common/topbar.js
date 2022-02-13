import logo from "./../../assets/logo.png";
import Logout from "./logoutHandler";
function TopBar(props) {
  return (
    <div class="navbar-custom">
      <div class="logo-box ">
        <h3 class="logo logo-dark text-center">
          <img className="mt-2 avatar-xl" src={logo} />
        </h3>
        <h3 class="logo logo-light text-center">
          <img className="mt-2 avatar-xl" src={logo} />
        </h3>
      </div>
      <ul class="list-unstyled topnav-menu topnav-menu-left mb-0">
        <li>
          <button class="button-menu-mobile disable-btn waves-effect">
            <i class="fe-menu"></i>
          </button>
        </li>

        <li>
          <h4 class="page-title-main">Dashboard</h4>
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
