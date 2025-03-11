import './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Dashboard from './pages/Dashboard';
import Users from './pages/user/Users';
import Settings from './pages/Settings';
import UserAdd from './pages/user/UserAdd';
import Login from './pages/auth/Login';
import CustomLayout from './components/Layout';

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users title="Users"/>} />
          <Route path="/admin/user/create" element={<UserAdd />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

