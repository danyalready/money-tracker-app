import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index";
import "./static/styles/index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";

axios.defaults.baseURL =
  "https://europe-west2-moneytrackerapp-0000.cloudfunctions.net/api";
// axios.defaults.baseURL =
//   "http://localhost:5000/moneytrackerapp-0000/europe-west2/api";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
