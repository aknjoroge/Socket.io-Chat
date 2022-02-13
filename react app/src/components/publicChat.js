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

import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "../components/logoutHandler";
import { NavLink, useHistory } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" target="_blank" href="https://alex.techkey.co.ke/">
        akNjoroge
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function PublicChat(props) {
  const [value, setValue] = React.useState("one");
  let user = useSelector(function (store) {
    return store.user;
  });

  let history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const clickHandler = (route) => {
    history.push(route);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />

      <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
          Public Chat
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
          Send a message to all users in the public group chat
        </Typography>
        <hr />

        <Box sx={{ mt: 4, width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              onClick={function (event) {
                event.preventDefault();
                clickHandler("/online");
              }}
              icon={<CloudIcon />}
              label=" Online Users"
            />
            <LinkTab
              onClick={function (event) {
                event.preventDefault();
                clickHandler("/public");
              }}
              icon={<PublicIcon />}
              label="PUBLIC CHAT"
            />

            <LinkTab
              onClick={function (event) {
                event.preventDefault();
                clickHandler("/onine/groups");
              }}
              icon={<PeopleAltIcon />}
              label="Join Groups"
            />

            <LinkTab
              onClick={function (event) {
                event.preventDefault();
                clickHandler("/online");
              }}
              icon={<ChatIcon />}
              label="inbox"
            />
          </Tabs>
        </Box>
      </Container>
      {props.children}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Managed by Techkey Cybernetics
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
export default PublicChat;
