import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import applicationStore from "./store";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={applicationStore}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
