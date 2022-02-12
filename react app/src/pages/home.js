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
import { Route } from "react-router-dom";
import LiveRoom from "./../components/liveRoom";
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

export default function StickyFooter() {
  const [value, setValue] = React.useState("one");

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
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Public Chat System
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
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Route path="/online" exact>
          <LiveRoom />
        </Route>
      </Container>
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
