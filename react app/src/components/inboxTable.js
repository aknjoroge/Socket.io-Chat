import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function InboxTable(props) {
  let { message, setState } = props;
  let user = useSelector(function (store) {
    return store.user;
  });

  function clickHanlder(item) {
    console.log("TC-876", item);
  }

  return (
    <div class="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h3 style={{ fontWeight: 300 }} className="mb-2 baseFont">
          View Your Inbox
        </h3>
        <div class="mt-2 table-responsive">
          <table class="table table-bordered mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>User ID</th>
                <th>message</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {message.map(function (item, index) {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.userName}</td>
                    <td>{item.message}</td>
                    <td>{item.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}
export default InboxTable;
