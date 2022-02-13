import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
function Logout() {
  let history = useHistory();
  function logoutHadler(event) {
    event.preventDefault();
    localStorage.setItem("publicUserID", "");
    history.push("/");
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
