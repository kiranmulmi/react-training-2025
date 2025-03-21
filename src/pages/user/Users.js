import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Space, Table, Button, Card, Modal } from 'antd';
import { deleteUser, getUsers } from "../../utils/user.util";
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { showSuccessToast } from "../../utils/toastify.util";

const Users = (props) => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
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
  const showModal = (id) => {
    setDeleteId(id)
    setOpen(true);
  };
  const deleteData = () => {
    deleteUser(deleteId).then(() => {
      getUsers().then((response) => {
        setData(response);
        showSuccessToast('User deleted successfully');
        setOpen(false);
      });
    });
  };
  const hideModal = () => {
    setOpen(false);
  };
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
          <NavLink to={`/admin/user/edit/${record.id}`}><EditOutlined /></NavLink>
          {/* <button type="button">Delete</button> */}
          <DeleteOutlined onClick={() => showModal(record.id)}/>
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
      <Modal
        title="Are you sure want to delete this?"
        open={open}
        onOk={deleteData}
        onCancel={hideModal}
        okText="Delete"
        cancelText="Cancel"
      ></Modal>
    </div>
  );
}
export default Users;