import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/base.less";
// import MyImage from './App1'
import Router from "./router";

import { Button } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router></Router>
  </>
);
