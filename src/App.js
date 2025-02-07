import './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <div className="v-row main-wrapper">
        <Sidebar/>
        <div className="v-col main-body">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;

