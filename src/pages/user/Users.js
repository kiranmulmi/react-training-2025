import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Space, Table, Button, Card } from 'antd';
import { getUsers } from "../../utils/user.util";

const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleAddUser = () => {
    navigate('/admin/user/create');
  };
  useEffect(() => {
    getUsers().then((response) => {
      setData(response);
    });
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, item) => <NavLink to={`/admin/user/details/${item.id}`}>{item.name}</NavLink>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <NavLink to={`/admin/user/edit/${record.id}`}>Edit</NavLink>
          <button type="button">Delete</button>
        </Space>
      ),
    },
  ];
  return (
    <div className="v-col users">
      <Card
        style={{
          marginTop: 16,
        }}
        type="inner"
        title={<h1>{props.title}</h1>}
        extra={<Button type="primary" onClick={handleAddUser}>Add User</Button>}
      >
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}
export default Users;