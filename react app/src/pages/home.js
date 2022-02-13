import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import CloudIcon from "@mui/icons-material/Cloud";
import PublicIcon from "@mui/icons-material/Public";
import Tabs from "@mui/material/Tabs";
import LinkTab from "@mui/material/Tab";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatIcon from "@mui/icons-material/Chat";
import { Route, useHistory } from "react-router-dom";
import LiveRoom from "./../components/liveRoom";
import PageSection from "./pagesection";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/user";
export default function Home() {
  let dispatch = useDispatch();
  let user = useSelector(function (store) {
    return store.user;
  });
  let history = useHistory();

  React.useEffect(
    function () {
      if (user.id == "xxxxxxxxxxxx") {
        return history.push("/");
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
    <PageSection>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Route path="/online" exact>
          <LiveRoom />
        </Route>
      </Container>
    </PageSection>
  );
}
