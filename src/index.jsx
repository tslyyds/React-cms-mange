import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/base.css";
// import MyImage from './App1'
import Router from "./router";
// import MyImage from './components/MyImage/index'
// import MyButton from './components/MyButton/index'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router></Router>
  </>
);
