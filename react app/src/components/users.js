function Users(props) {
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
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}
export default Users;
