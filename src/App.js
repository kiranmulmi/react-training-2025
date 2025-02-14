import './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/user/Users';
import Settings from './pages/Settings';

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <div className="v-row main-wrapper">
        <Sidebar/>
        <div className="v-col main-body">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users title="Users"/>} />
            <Route path="/admin/settings" element={<Settings />} />
          </Routes>
        </div>
      </div> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;

