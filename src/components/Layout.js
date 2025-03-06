import { Outlet, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin  = localStorage.getItem('is_login');
    if (isLogin !== '1') {
      navigate('/login');
    }
  }
  , []);
  return (
    <>
      <Header />
      <div className="v-row main-wrapper">
        <Sidebar/>
        <div className="v-col main-body">
          <Outlet />
        </div>
      </div> 
      <Footer />
    </>
  );
}

export default Layout;