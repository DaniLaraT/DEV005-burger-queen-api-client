import { Routes, Route } from "react-router-dom";
import Login from "./views/login/login";
import MenuBreakfast from "./views/waiter/menuBreakfast";
import MenuLunch from "./views/waiter/menuLunch";
import OrderReady from "./views/waiter/orderReady";
import OrderPending from "./views/waiter/orderPending";
import Kitchen from "./views/chef/kitchen";
import AdminProducts from "./views/administrator/adminProducts";
import AdminUsers from "./views/administrator/adminUsers";
import Page404 from "./views/page404/page404";

import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/MenuBreakfast" element={< MenuBreakfast/>} />
      <Route path="/MenuLunch" element={< MenuLunch/>} />
      <Route path="/OrderReady" element={< OrderReady/>} />
      <Route path="/OrderPending" element={< OrderPending/>} />
      <Route path="/Kitchen" element={< Kitchen/>} />
      <Route path="/AdminProducts" element={< AdminProducts/>} />
      <Route path="/AdminUsers" element={<AdminUsers />} />
      <Route path="/Page404" element={<Page404 />} />
    </Routes>
  );
}

export default App;




