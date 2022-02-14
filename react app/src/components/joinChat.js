import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import API_ULR from "../store/var";
function JoinChat(props) {
  let { setState, cb } = props;
  let user = useSelector(function (store) {
    return store.user;
  });
  function joinChat(event) {
    event.preventDefault();
    if (user.id == "xxxxxxxxxxxx") {
      return;
    }
    let socket = io(`${API_ULR}/chat/subscribe`, {
      auth: { name: user.name, id: user.id },
    });

    socket.on("Not_In_Chat", function (data) {
      if (data) {
        setState(true);
      }
    });
    socket.on("New_Group_Member", function (data) {
      cb(data);
    });
  }
  return (
    <div class="row mt-4">
      <div class="col-xl-4">
        <div className="card">
          <div class="card-box project-box">
            <div class="badge badge-success float-right">invitation</div>
            <h4 class="mt-0">
              <a style={{ fontWeight: 300 }} class="baseFont text-dark">
                Join the public Chat
              </a>
            </h4>
            <p class="text-success text-uppercase font-13">
              Send Global Messages To all Connected clients
            </p>
            <p class="text-muted font-13">
              In the public chat, you can send messages to all active members in
              the group, the non connected memebers will not receive your
              message
            </p>
            <div>
              <button
                onClick={joinChat}
                className="btn  btn-rounded btn-block btn-success"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JoinChat;
