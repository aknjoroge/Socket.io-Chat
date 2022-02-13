import { useRef } from "react";
import { useSelector } from "react-redux";

function TextInput(props) {
  let user = useSelector(function (store) {
    return store.user;
  });
  let { addMessage } = props;
  let messageRef = useRef();

  function submitHanlder(event) {
    event.preventDefault();

    let message = messageRef.current.value.trim();
    if (message.length == 0) {
      return;
    }

    

    addMessage({
      userName: user.name,
      message,
      date: "10:00",
      userID: user.id,
    });
  }

  return (
    <div class="p-3 conversation-input border-top">
      <div class="row">
        <div class="col">
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Message..."
            />
          </div>
        </div>
        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-primary chat-send width-md waves-effect waves-light"
          >
            <span class="d-none d-sm-inline-block mr-2">Send</span>{" "}
            <i class="mdi mdi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TextInput;
