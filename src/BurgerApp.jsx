// eslint-disable-next-line no-unused-vars
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Waiter from "./pages/waiter/Waiter";
import Admin from "./pages/admin/Admin";
import Page404 from "./pages/404/Page404 ";
import Chef from "./pages/chef/chef";

  function BurgerApp() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Waiter" element={< Waiter/>} />
        <Route path="/Chef" element={< Chef/>} />
        <Route path="/Orders" element={< Orders/>} />
        <Route path="/Admin" element={< Admin/>} />
        <Route path="/Page404" element={<Page404 />} />
      </Routes>
    );
  }
  
  export default BurgerApp;