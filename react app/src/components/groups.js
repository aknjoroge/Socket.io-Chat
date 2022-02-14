import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppGroups(props) {
  let { groups, setState } = props;
  let user = useSelector(function (store) {
    return store.user;
  });

  function clickHanlder(item) {
    setState(item);
  }

  return (
    <div class="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h3 style={{ fontWeight: 300 }} className="mb-2 baseFont">
          Select a group to join
        </h3>
        <div class="mt-2 table-responsive">
          <table class="table table-bordered mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Group Name</th>
                <th>Group Id</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {groups.map(function (item, index) {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.id}</td>

                    <td>
                      <button
                        onClick={function (event) {
                          event.preventDefault();
                          clickHanlder(item);
                        }}
                        className="btn btn-primary"
                        type="button"
                      >
                        Join
                      </button>
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
export default AppGroups;
