// eslint-disable-next-line no-unused-vars
/*import React from 'react'
import Login from './Vistas/login';

function App() {
  return (
    <Login/>
  );
}

export default App;*/

import { Routes, Route } from "react-router-dom";
import Login from "./Vistas/login/login";
import MenuBreakfast from "./Vistas/waiter/menuBreakfast";
import MenuLunch from "./Vistas/waiter/menuLunch";
import OrderReady from "./Vistas/waiter/orderReady";
import OrderPending from "./Vistas/waiter/orderPending";
import Kitchen from "./Vistas/chef/kitchen";
import AdminProducts from "./Vistas/administrator/adminProducts";
import AdminUsers from "./Vistas/administrator/adminUsers";
import Page404 from "./Vistas/page404/page404";

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




