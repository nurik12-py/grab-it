import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Order from "./views/Order";
import Orders from "./views/Orders";
import Profile from "./views/Profile";
import ScanMe from "./views/ScanMe/ScanMe";
import Registration from "./views/Registration";
import Login from "./views/Login";
import Home from "./views/Home";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/orders/:id" element={<Order />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/profile" element={<Profile />} />
      </Route>
      <Route exact path="/scanme/:id" element={<ScanMe />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
