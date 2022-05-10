import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import OrderDetails from "./views/OrderDetails";
import Orders from "./views/Orders";
import Profile from "./views/Profile";
import ScanMe from "./views/ScanMe/ScanMe";
import Registration from "./views/Registration";
import Login from "./views/Login";
import Home from "./views/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgetPassword from "./views/ForgetPassword/ForgetPassword";
import PasswordRecovery from "./views/PasswordRecovery";
import NotFound from "./views/NotFound";

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
        <Route path="/" element={<Home />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/scanme/:id" element={<ScanMe />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<PasswordRecovery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
