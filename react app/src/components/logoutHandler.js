import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../store/user";
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
    <Button
      sx={{ mt: 5 }}
      onClick={logoutHadler}
      color="error"
      endIcon={<LogoutIcon />}
      variant="contained"
    >
      Exit App
    </Button>
  );
}
export default Logout;
