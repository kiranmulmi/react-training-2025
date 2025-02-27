import { useNavigate } from "react-router";
import UserHeader from "./UserHeader";
import UserRow from "./UserRow";

const Users = (props) => {
  const navigate = useNavigate();
  const data = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@a.com' },
    { id: 2, name: 'Jane Doe', age: 24, email: 'jane@gmail.com'},
    { id: 3, name: 'John Smith', age: 30, email: 'smith@gamil.com'},
    { id: 4, name: 'Jane Smith', age: 28, email: 'xyz@gmail.com'},
    { id: 5, name: 'John Brown', age: 35, email: 'brown@yahoo.com'},
  ];
  const handleAddUser = () => {
    navigate('/admin/user/create');
  };
  return (
    <div className="v-col users">
      <button className="btn" onClick={handleAddUser}>Add User</button>
      <h1>{props.title}</h1>
      <table id="users">
        <thead>
          <UserHeader/>
        </thead>
        <tbody>
          {data.map((item) => (<UserRow row={item}/>))}
        </tbody>
      </table>
    </div>
  );
}
export default Users;