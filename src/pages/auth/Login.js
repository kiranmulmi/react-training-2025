import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Button, Form, Input } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username === 'admin' && values.password === 'admin') {
      setMessage('Login successful');
      localStorage.setItem('is_login', 1);
      navigate('/admin/users');
    } else {
      localStorage.setItem('is_login', 0);
      setMessage("Incorrect username or password");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* Show login message */}
      {message && <div>{message}</div>}
    </div>
  );
};

export default Login;
