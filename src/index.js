import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WeatherContainer from "./container/WeatherContainer";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
