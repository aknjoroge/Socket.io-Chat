import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Messsage from "./message";
import TextInput from "./textInput";

function ChatApp(props) {
  let { hideView } = props;
  let [messages, setMessages] = useState([]);
  let dummyMessages = [
    {
      userName: "Margaret Clayton",
      message: "dasdasda lorem lroem",
      date: "10:00",
      userID: "",
    },
    {
      userName: "dasdad doe",
      message: "dadasdasdadam",
      date: "10:00",
      userID: "",
    },
  ];
  useEffect(function () {
    setMessages(dummyMessages);
  }, []);


  function addMessageHandler(data) {
      
  }

  return (
    <div className={`row ${hideView ? "mt-4" : "mt-0"} `}>
      <div class="col-xl-12 col-lg-12">
        <div className="p-2">
          <div class="conversation-list-card card">
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <h5 class="mt-0 mb-1 text-truncate">Public Chat</h5>
                  <p class="font-13 text-muted mb-0">
                    <i class="mdi mdi-circle text-success mr-1 font-11"></i>{" "}
                    Online
                  </p>
                </div>
                <Link className="btn btn-warning" to="/online">
                  Exit Chat
                </Link>
              </div>
              <hr class="my-3" />

              <div>
                <ul class="conversation-list slimscroll slimscroll-chat">
                  <li>
                    <div class="chat-day-title">
                      <span class="title">Messages</span>
                    </div>
                  </li>
                  {messages.map(function (item, index) {
                    return <Messsage key={index} item={item} />;
                  })}
                </ul>
              </div>
            </div>
            <TextInput addMessage={addMessageHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
