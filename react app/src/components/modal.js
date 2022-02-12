import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InfoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>App info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            About This Application
          </Typography>

          <hr />
          <Typography variant="p" id="modal-modal-description" sx={{ mt: 2 }}>
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
          </Typography>
          <hr />
          <Typography variant="p" id="modal-modal-description" sx={{ mt: 2 }}>
            Success !!!! &copy;
            <a
              style={{ textDecoration: "none" }}
              href="https://alex.techkey.co.ke/"
              target={"_blank"}
            >
              akNjoroge
            </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
