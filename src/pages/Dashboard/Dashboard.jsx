import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Products from "../Products/Products";
import "./dash.css";
function Dashboard({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default Dashboard;
