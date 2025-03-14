import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Space, Table, Tag } from 'antd';
import UserHeader from "./UserHeader";
import UserRow from "./UserRow";
import axios from 'axios';
import { Button } from 'antd';

const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleAddUser = () => {
    navigate('/admin/user/create');
  };
  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    //   render: (text) => <a>{text}</a>,
    // },
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
  ];
  return (
    <div className="v-col users">
      <h1>{props.title}</h1>
      <Button type="primary" onClick={handleAddUser}>Add User</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default Users;