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

function PageSection(props) {
  const [value, setValue] = React.useState("one");
  let user = useSelector(function (store) {
    return store.user;
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Grid sx={{ mt: 1 }} container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Your Online user ID
              </Typography>
              <Typography variant="h5" component="div">
                {user.id}
              </Typography>
              <Typography color="text.secondary">
                {user.id == "xxxxxxxxxxxx" &&
                  "user data not loaded!! Ensure you are online"}
                {user.id != "xxxxxxxxxxxx" && (
                  <Button size="small">Copy</Button>
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Logout />
        </Grid>
      </Grid>
      <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Public Chat System.
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
          select a channel below
        </Typography>
        <Box sx={{ mt: 4, width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab icon={<CloudIcon />} label="Online Users" to="/online" />
            <LinkTab icon={<PublicIcon />} label="Public Chat" to="/online" />
            <LinkTab
              icon={<PeopleAltIcon />}
              label="Join a Groups"
              to="/online"
            />
            <LinkTab icon={<ChatIcon />} label="Private chat" to="/online" />
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
export default PageSection;
