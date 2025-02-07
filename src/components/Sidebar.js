import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <div className="v-col sidebar">
      <ul className="sidebar-menu">
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;