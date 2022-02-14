import { useSelector } from "react-redux";

function Messsage(props) {
  let { item } = props;
  let user = useSelector(function (store) {
    return store.user;
  });

  if (item.event) {
    return (
      <li>
        <div class="chat-day-title">
          <span class="title">{item.event}</span>
        </div>
      </li>
    );
  }

  return (
    // <li class="odd">
    <li className={`${user.id == item.userID ? "odd" : ""}`}>
      <div class="message-list">
        <div class="conversation-text">
          <div class="ctext-wrap">
            <span class="user-name"> {item.userName} </span>
            <p>{item.message}</p>
          </div>
          <span class="time">{item.date}</span>
        </div>
      </div>
    </li>
  );
}

export default Messsage;
