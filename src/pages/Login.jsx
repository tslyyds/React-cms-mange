import React from 'react'
import './less/Login.less'
import { Button, Form, Input,message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import { LoginApi } from "../request/api";



export default function Login() {
  const navigate=useNavigate()
  const onFinish = (values)=>{
    LoginApi({
      username:values.username,
      password:values.password
    }).then(
      (res)=>{
        if(res.errCode===0){
          localStorage.setItem('username',res.data.username)
          localStorage.setItem('player',res.data.player)
          localStorage.setItem('avatar',res.data.avatar)
          localStorage.setItem('editable',res.data.editable)
          localStorage.setItem('cms-token',res.data['cms-token'])

          message.success('登录成功')
          setTimeout(() => {
            navigate('/')
          }, 1500);
        }else{
          message.error(res.err)
        }
      }
    )
  }
  return (
    <div className='box'>
      <div className="LoginBox">
      <Form
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <h2>登录账号</h2>
      <Form.Item
        name='username'
        rules={[{ required: true, message: '请输入你的账号！' }]}
      >
        <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder='请输入用户名'/>
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: '请输入你的密码' }]}
      >
        <Input.Password size='large' placeholder='请输入密码'  prefix={<LockOutlined className="site-form-item-icon" />}/>
      </Form.Item>

      <Form.Item>
      <Link to='/register'>还没有账号？点击注册</Link>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" block size='large'>
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}
