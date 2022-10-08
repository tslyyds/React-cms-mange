import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function MyBread() {
  const [breadName, setBreadName] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case "/listtable":
        setBreadName("查看文章列表(table)");
        break
      case "/listlist":
        setBreadName("查看文章列表(list)");
        break
      case "/edit":
        setBreadName("文章编辑");
        break
      case "/means":
        setBreadName("修改资料");
        break
      default:
        break
    }
  }, [pathname]);
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='/'>
        <HomeOutlined></HomeOutlined>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href={pathname}>{breadName}</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
