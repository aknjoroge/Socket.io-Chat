function Modal() {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Project Info
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p className="baseFont">
              This is a React built project demonstarting the power of web
              sockets.
              <br />
              The application is developed from the basic example in the{" "}
              <a target={"_blank"} href="https://socket.io/get-started/chat">
                socket.io documentation
              </a>
            </p>
            <ul>
              <li>
                No database is in use thus messages sent will be lost after a
                reload / socket reconnect
              </li>
              <li>
                users are given free a access ID by the socket server to enable
                them to operate in this platform
              </li>
              <li>
                This is a public repo located{" "}
                <a
                  target={"_blank"}
                  href="https://github.com/aknjoroge/Socket.io-Chat"
                >
                  here
                </a>
                , clone it and play with it, add a chat Database is need be.
              </li>
            </ul>
            <p className="ml-1">
              &copy;{" "}
              <a target="_blank" href="https://alex.techkey.co.ke/">
                akNjoroge
              </a>
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
