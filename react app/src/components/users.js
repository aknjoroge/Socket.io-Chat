import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Users(props) {
  let { users } = props;
  let user = useSelector(function (store) {
    return store.user;
  });
  return (
    <div class="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div class="table-responsive">
          <table class="table table-bordered mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>Joining time</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {users.map(function (item, index) {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td className="text-center">
                      {item.id == user.id && (
                        <div className="user-list" title="This is you">
                          <i className="mdi mdi-24px mdi-account-circle"></i>
                        </div>
                      )}
                      {item.id != user.id && (
                        <Link to={`/private/${item.authSocketid}`}>
                          <i className="mdi mdi-24px mdi-chat"></i>
                        </Link>
                      )}
                    </td>
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
export default Users;
