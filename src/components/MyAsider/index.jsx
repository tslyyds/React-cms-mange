import React,{useState,useEffect} from "react";
import {
  UnorderedListOutlined,
  EditOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyAsider() {
  const navigate = useNavigate();
  const loaction = useLocation()
  const [defayltLocation,setdefayltLocation] = useState('')
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  useEffect(()=>{
    let key = loaction.pathname.split('/')[1]
    setdefayltLocation(key)
  },[])
  const handleClick = (e) => {
    navigate("/" + e.key);
    setdefayltLocation(e.key)
  };
  const items = [
    getItem("查看文件列表", "listtable", <UnorderedListOutlined />),
    getItem("查看文件列表", "listlist", <UnorderedListOutlined />),
    getItem("文章编辑", "edit", <EditOutlined />),
    getItem("修改资料", "means", <ContainerOutlined />),
  ];
  return (
    <div>
      <Menu
        onClick={handleClick}
        className="MyAsider"
        selectedKeys={defayltLocation}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
}
