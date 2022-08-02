import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/Signup/Signup";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="App">{children}</div>;
}

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
