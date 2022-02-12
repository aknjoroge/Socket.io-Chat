import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import logo from "./assets/reactlogo.png";
import Online from "./pages/home";
import SignInSide from "./pages/login";
function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path={"/login"} exact>
        <SignInSide />
      </Route>
      <Route path={"/online"} exact>
        <Online />
      </Route>
    </Fragment>
  );
}

export default App;
