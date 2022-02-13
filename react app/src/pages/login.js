import React, { useRef } from "react";

import {
  Container,
  Input,
  FormGroup,
  Form,
  Row,
  Col,
  FormFeedback,
  Button,
  FormText,
  Label,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/user";
import { useHistory } from "react-router-dom";

import { io } from "socket.io-client";
import Modal from "../components/common/modal";

export default function Login() {
  let dispatch = useDispatch();
  let history = useHistory();
  let inputRef = useRef();
  let user = useSelector(function (store) {
    return store.user;
  });
  let name = user.name;
  let id = user.id;

  const handleSubmit = (event) => {
    event.preventDefault();

    let userName = inputRef.current.value;
    if (!userName) {
      return;
    }

    if (userName) {
      const socket = io("http://localhost:4000/provider", {
        auth: { userName },
      });

      socket.on("USER_ID", (data) => {
        localStorage.setItem(
          "publicUserID",
          JSON.stringify({ name: userName, id: data })
        );
        dispatch(userAction.loaduser({ name: userName, id: data }));
      });
      socket.on("public_user", (data) => {
        setTimeout(() => {
          history.push("/online");
        }, 500);
      });
    }
  };

  function keyEvent(event) {
    let value = event.target.value;

    dispatch(userAction.loaduser({ name: value }));
  }
  return (
    <div class="account-pages ">
      <div class="row  justify-content-center">
        <div class="col-md-6 bg-img"></div>
        <div class="col-md-6 sidebar-main">
          <div class="card-body p-4">
            <div class="text-center mb-4">
              <h4 class="text-uppercase mt-0">
                <i className="mdi mdi-account-cog mdi-48px"></i>
              </h4>
            </div>

            <h2 style={{ fontWeight: 300 }} className="text-center baseFont">
              Socket.io Public Chat App
            </h2>
            <h5 style={{ fontWeight: 300 }} className="text-center baseFont">
              Please Provide A UserName
            </h5>
            <p style={{ fontWeight: 300 }} className="text-center baseFont">
              {name}
            </p>

            <form onSubmit={handleSubmit} action="#">
              <div class="form-group mb-3">
                <label
                  style={{ fontWeight: 200 }}
                  className="baseFont"
                  for="emailaddress"
                >
                  UserName
                </label>
                <input
                  style={{ fontWeight: 200 }}
                  class="form-control app-input baseFont"
                  type="text"
                  onChange={keyEvent}
                  ref={inputRef}
                  required=""
                  placeholder="Enter a username"
                />
              </div>

              <div class="form-group mb-0 text-center">
                <button
                  style={{ height: "50px" }}
                  class="btn    baseFont btn-primary btn-block"
                  type="submit"
                >
                  Join Chat <i className="mdi md-18px mdi-door-open"></i>
                </button>
              </div>
            </form>
            <hr />
            <div class="row mt-3">
              <div class="col-12 text-center">
                <p
                  style={{ fontWeight: 300 }}
                  className="text-center text-muted baseFont"
                >
                  App id : {id}
                </p>
                <p>
                  <button
                    class="btn btn-primary waves-effect waves-light"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i class="mdi mdi-information-variant mr-1 mdi-18px baseFont"></i>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}
