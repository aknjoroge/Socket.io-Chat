import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Messsage from "./message";
import TextInput from "./textInput";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import ChatBox from "./chatBox";
function ChatApp(props) {
  let user = useSelector(function (store) {
    return store.user;
  });
  let { hideView, joinState } = props;
  let [messages, setMessages] = useState([]);
  let [socket, setsocket] = useState({});
  //Creating Chat Socket connection

  useEffect(function () {
    // Adding event listeners
    if (!socket.connected) {
      let conn = io("http://localhost:4000/chat", {
        auth: { name: user.name, id: user.id },
      });
      conn.on("connect_error", function (data) {
        console.log("TC-ERROR 1 !!!!!!!", data);
      });
      setsocket(conn);
      conn.on("add_pubic_message", function (response) {
        setMessages(function name(prevData) {
          return [...prevData, response];
        });
      });
    }
  }, []);

  useEffect(
    function () {
      if (joinState) {
        if (joinState.event) {
          setMessages(function name(prevData) {
            return [...prevData, joinState];
          });
        }
      }
    },
    [joinState]
  );

  function messageReceived(response) {
    if (response.status == "success") {
      setMessages(function name(prevData) {
        return [...prevData, response.data];
      });
    }
  }

  function addMessageHandler(data) {
    socket.emit("new_public_message", data, messageReceived);

    let element = document.querySelector(".slimscroll-chat");

    element.scrollTop = element.scrollHeight;
  }

  return (
    <Fragment>
      <ChatBox
        addMessageHandler={addMessageHandler}
        messages={messages}
        hideView={hideView}
      />
    </Fragment>
  );
}

export default ChatApp;
