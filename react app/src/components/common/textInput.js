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

    let options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    let curentdate = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );

    addMessage({
      userName: user.name,
      message,
      date: curentdate,
      userID: user.id,
    });
    messageRef.current.value = "";
  }

  return (
    <div class="p-3 conversation-input border-top">
      <div class="row">
        <form class="row col-md-12" onSubmit={submitHanlder}>
          <div class="col">
            <div>
              <input
                type="text"
                class="form-control"
                ref={messageRef}
                required
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
        </form>
      </div>
    </div>
  );
}
export default TextInput;
