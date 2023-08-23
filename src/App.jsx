// eslint-disable-next-line no-unused-vars
/*import React from 'react'
import Login from './views/login';

function App() {
  return (
    <Login/>
  );
}

export default App;*/

import { Routes, Route } from "react-router-dom";
import Login from "./views/login/login";
import OrderReady from "./views/waiter/orderReady";
import OrderPending from "./views/waiter/orderPending";
import Kitchen from "./views/chef/kitchen";
import AdminProducts from "./views/administrator/adminProducts";
import AdminUsers from "./views/administrator/adminUsers";
import Page404 from "./views/page404/page404";

import "./App.css";
import Menu from "./views/waiter/menu";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Menu" element={< Menu/>} />
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




