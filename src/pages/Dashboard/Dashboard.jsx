import React from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Products from "../Products/Products";
import "./dash.css";
function Dashboard() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default Dashboard;
