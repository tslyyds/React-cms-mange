import React from "react";
import "./less/Register.less";
import { Button, Form, Input,message} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { RequestApi } from "../request/api";

export default function Register() {
  const onFinish = (values) => {
    RequestApi({
      username:values.username,
      password:values.password
    }).then(
      (res)=>{
      message.success('登录成功')
      }
    )
  };
  return (
    <div className="box">
      <div className="LoginBox">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <h2>注册</h2>
          <Form.Item 
            name='username'
            rules={[{ required: true, message: "请输入你的账号" }]}>
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入你的密码" }]}
          >
            <Input.Password
              size="large"
              placeholder="请输入密码"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请确认密码！",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("密码不匹配，请重新输入"));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="请再次输入密码"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Link to="/login">已有账号？点击登录</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
