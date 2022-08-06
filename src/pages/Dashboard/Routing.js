import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Products from "../Products/Products";

function Routing() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
