import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router";
import { Button, Form, Input, Card } from 'antd';
import { checkLogin } from '../../utils/user.util';
import { UserContext } from '../../context/user.context';
import { showErrorToast, showSuccessToast } from '../../utils/toastify.util';

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const { _setUser } = useContext(UserContext);
  const onFinish = (values) => {
    console.log('Success:', values);
    checkLogin(values.username, values.password).then((data) => {
      if (data === null) {
        showErrorToast('Incorrect username or password');
      } else {
        showSuccessToast('Login successful');
        _setUser(data);
        localStorage.setItem('is_login', 1);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/admin/users');
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Card
        style={{
          marginTop: 16,
          width: 500,
          margin: '100px auto',
        }}
        type="inner"
        title={<h1>Admin Login</h1>}
      >
        {message && <div>{message}</div>}
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
            Login
          </Button>
        </Form.Item>
      </Form>
      </Card>
    </div>
  );
};

export default Login;
