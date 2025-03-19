import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Card
} from 'antd';
import { useParams, useNavigate } from "react-router"
import { createUser, getUser, updateUser } from '../../utils/user.util';

const { Option } = Select;

const UserAdd = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [formState, setFormState] = useState(
      {
        name: "",
        age: 0,
        email: "",
        role: ""
      }
    );
  const [form] = Form.useForm();

  useEffect(() => {
    if (params.userId) {
      getUser(params.userId).then((data) => {
        setFormState(data);
        form.setFieldsValue(data);
      });
    }
  }, []);

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    if(!params.userId) {
      await createUser(values);
    } else {
      await updateUser(params.userId, values);
    }
    navigate('/admin/users');
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
       <Card
        style={{
          marginTop: 16,
        }}
        type="inner"
        title={<h1>{params.userId ? "Edit User": "Add User"}</h1>}
      >
        <Form
        form={form}
        onFinish={onFinish}
        initialValues={formState}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              type: 'text',
              message: 'The input is not valid name!',
            },
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
              message: 'Please select role!',
            },
          ]}
        >
          <Select placeholder="select your role">
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default UserAdd;