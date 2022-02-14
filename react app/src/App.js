import { Fragment, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import logo from "./assets/reactlogo.png";
import PublicChat from "./components/publicChat";
import Online from "./pages/home";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";

import "./index.css";
import Groups from "./components/groupApp";
import InboxApp from "./components/inbox";
import InboxList from "./components/inboxList";
function App() {
  let [connector, setconenctor] = useState();
  function passConn(data) {
    setconenctor(data);
  }
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path={"/login"} exact>
        <Login />
      </Route>
      <Route path={"/online"} exact>
        <Online cb={passConn} />
      </Route>
      <Route path={"/public"} exact>
        <PublicChat fullscreen={true} />
      </Route>
      <Route path={"/groups"} exact>
        <Groups fullscreen={true} />
      </Route>
      <Route path={"/inbox"} exact>
        <InboxList connector={connector} fullscreen={true} />
      </Route>
      <Route path={"/inbox/:id"} exact>
        <InboxApp fullscreen={true} />
      </Route>
    </Fragment>
  );
}

export default App;
