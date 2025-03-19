import { NavLink, useNavigate } from "react-router";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.setItem('is_login', 0);
    navigate('/login');
  }
  return (
    <div className="v-col sidebar">
      <ul className="sidebar-menu">
        <li><NavLink to="/admin/users">Users</NavLink></li>
        <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/admin/settings">Settings</NavLink></li>
        <li><button type="button" onClick={handleLogoutClick}>Logout</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;