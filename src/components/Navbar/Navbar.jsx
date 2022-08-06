import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";

import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={sidebar ? "nav-menu" : "nav-menu active"}>
          <ul
            className="nav-menu-items"
            // onClick={showSidebar}
            style={{ textAlign: "center" }}
          >
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link> */}
              <div style={{ width: "100%", textAlign: "center" }}>
                <h2 style={{ color: "white" }}>Digital</h2>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
