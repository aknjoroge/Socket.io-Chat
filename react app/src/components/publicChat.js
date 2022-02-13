import * as React from "react";

import { useSelector } from "react-redux";

import { NavLink, useHistory } from "react-router-dom";

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
  return <h1>hi</h1>;
}
export default PublicChat;
