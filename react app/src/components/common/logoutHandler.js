import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user";
function Logout() {
  let history = useHistory();
  let dispatch = useDispatch();
  function logoutHadler(event) {
    event.preventDefault();
    dispatch(userAction.empty());
    localStorage.setItem("publicUserID", "");
    history.push("/");
    window.location.reload(true);
  }

  return (
    <button onClick={logoutHadler} className="btn btn-dark">
      Logout
    </button>
  );
}
export default Logout;
