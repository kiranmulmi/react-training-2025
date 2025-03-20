import React, { useState } from 'react';
import './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Dashboard from './pages/Dashboard';
import Users from './pages/user/Users';
import Settings from './pages/Settings';
import UserAdd from './pages/user/UserAdd';
import Login from './pages/auth/Login';
import CustomLayout from './components/Layout';
import UserDetails from './pages/user/UserDetails';
import { UserContext } from './context/user.context';

const App = () => {

  const [_user, _setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

  return(
    <UserContext.Provider value={{_user, _setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<CustomLayout />}>
            <Route path="dashboard/" element={<Dashboard />} />
            <Route path="users" element={<Users title="Users"/>} />
            <Route path="user/create" element={<UserAdd />} />
            <Route path="user/edit/:userId" element={<UserAdd />} />
            <Route path="user/details/:userId" element={<UserDetails />} />

            <Route path="/admin/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

