import React from "react";
import {Button} from 'antd'
import { Outlet } from "react-router-dom";
export default function App1() {
  return (
    <div>
      <Button type='primary'>按钮</Button>
      <Outlet></Outlet>
    </div>
  );
}
