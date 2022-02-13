import { useSelector } from "react-redux";

function Messsage(props) {
  let { item } = props;
  let user = useSelector(function (store) {
    return store.user;
  });
  return (
    // <li class="odd">
    <li>
      <div class="message-list">
        <div class="chat-avatar">
          <img src="assets/images/users/user-2.jpg" alt="" />
        </div>
        <div class="conversation-text">
          <div class="ctext-wrap">
            <span class="user-name">Margaret Clayton</span>
            <p>Hello!</p>
          </div>
          <span class="time">10:00</span>
        </div>
      </div>
    </li>
  );
}

export default Messsage;
