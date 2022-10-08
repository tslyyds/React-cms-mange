import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import MyHeader from "./components/MyHeader";
import MyAsider from "./components/MyAsider";
import MyBread from "./components/MyBread";

export default function App1() {
  return (
    <div>
      <Layout id="app">
        <MyHeader></MyHeader>
        <div id="contain">
          <MyAsider></MyAsider>
          <div className="contain_right">
            <MyBread className="contain_right_bread"></MyBread>
            <div className="contain_right_contain">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <footer>
          Give me the strength lightly to bear my joys and sorrows.
        </footer>
      </Layout>
    </div>
  );
}
