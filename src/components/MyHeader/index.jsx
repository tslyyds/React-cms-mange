import React from "react";
import { useState,useEffect } from "react";
import logo from "../../assets/logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu,message } from "antd";
import { useNavigate } from "react-router-dom";
import DefaultAvater from "../../assets/avater.jpg";

export default function MyHeader() {
  const navigate = useNavigate()
  const [avater, setAvater] = useState(DefaultAvater);
  const [username, setusername] = useState("游客");
  useEffect(()=>{
    let username1 = localStorage.getItem('username')
    let avatar1 = localStorage.getItem('avatar')
    if(username1){
      setusername(username1)
    }
    if(avatar1){
      setAvater('http://47.93.114.103:6688/'+avatar1)
    }
  })
  const logout=()=>{
    message.success('退出成功，即将返回首页！')
    localStorage.clear()
    setTimeout(()=>{
      navigate('/login')
    },1500)
  }
  const menu = (
    <Menu>
      <Menu.Item key={1}>修改资料</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key={2} onClick={logout}>退出登录</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <header>
        <img src={logo} className="logo"></img>
        <div className="right">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <img src={avater} alt="" className="avater" />
              <span>{username}</span>
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </header>
    </div>
  );
}
