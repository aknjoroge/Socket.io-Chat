import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import background from "./../assets/bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/user";
import { useHistory } from "react-router-dom";
import InfoModal from "../components/modal";
import { io } from "socket.io-client";
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

const theme = createTheme();

export default function SignInSide() {
  let dispatch = useDispatch();
  let history = useHistory();
  let user = useSelector(function (store) {
    return store.user;
  });
  let name = user.name;
  let id = user.id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let userName = data.get("userName");
    if (!userName) {
      return;
    }

    if (userName) {
      const socket = io("http://localhost:4000/provider", {
        auth: { userName },
      });

      socket.on("USER_ID", (data) => {
        dispatch(userAction.loaduser({ name: userName, id: data }));
      });
      socket.on("public_user", (data) => {
        setTimeout(() => {
          history.push("/online");
        }, 500);
      });
    }
  };

  function keyEvent(event) {
    let value = event.target.value;
    dispatch(userAction.loaduser({ name: value }));
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <InfoOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter a user name to continue
            </Typography>
            <Typography sx={{ mt: 2 }} component="p" variant="p">
              You will be identified using your username
            </Typography>
            <Typography sx={{ mt: 2 }} component="p" variant="p">
              {name}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onKeyPress={keyEvent}
                onChange={keyEvent}
                onKeyUp={keyEvent}
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="text"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Join Chat <KeyboardTabIcon />
              </Button>
              <InfoModal />
              <Typography
                style={{ opacity: 0.5 }}
                sx={{ mt: 2 }}
                component="p"
                variant="p"
              >
                App id : {id}
              </Typography>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
