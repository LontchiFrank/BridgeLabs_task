import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./land.css";

function Landing() {
  return (
    <div>
      <div>
        <nav className="nav">
          <input id="nav-toggle" type="checkbox" />
          <div class="logo">
            <strong style={{ color: "#3c37ff", fontWeight: "bold" }}>
              Digital
            </strong>
          </div>
          <ul class="links">
            <li
              className="bot1"
              style={{
                marginRight: "10px",
                border: "2px solid #3c37ff",
                borderRadius: "8px",
              }}
            >
              <a href="/signup">Sign In</a>
            </li>
            <li
              className="bot2"
              style={{
                border: "2px solid #000",
                borderRadius: "8px",
              }}
            >
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>

        <div class="container">
          <div className="lands">
            <div className="land1">
              <div className="land1_txt">
                <h1
                  style={{
                    fontSize: "2.8em",
                    fontWeight: "bold",
                    marginBottom: "22px",
                  }}
                >
                  Artificial{" "}
                  <strong style={{ color: "#3c37ff" }}>Intelligence</strong>{" "}
                  Driving Results for the Travel Industry
                </h1>
                <div className="bodies1">
                  <p style={{ fontSize: "1.8em" }}>
                    Discover the world's best Travel Industries using Artificial
                    Intelligence
                  </p>
                </div>
              </div>
              <div className="bton1">
                <button type="submit">
                  <Link
                    to="/signup"
                    style={{
                      listStyle: "none",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Sign Up{" "}
                  </Link>
                  <AiOutlineArrowRight
                    style={{ paddingTop: "5px", fontSize: "20px" }}
                  />{" "}
                </button>
              </div>
              <div className="bolon">
                <div className="bol_img">
                  <img
                    alt="Laptop Coding illustration - Free transparent PNG, SVG. No Sign up needed."
                    style={{ width: "100%", height: "100%" }}
                    src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/v1/icons/coding/laptop-coding-7lxj48yd26ctkl5jrbr29f.png/laptop-coding-d1dbmwal3dmfdtkiihcl5l.png?_a=AJE+xWI0"
                  />
                </div>
              </div>
              <div className="bolon1">
                <div className="bol_img">
                  <img
                    alt="Laptop Coding illustration - Free transparent PNG, SVG. No Sign up needed."
                    style={{ width: "100%", height: "100%" }}
                    src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/v1/icons/security/password-secure-vhqzmnq6g1effhsaf81e6.png/password-secure-4ets3be9f3rr5o8fqfod3f.png?_a=AJE+xWI0"
                  />
                </div>
              </div>
            </div>
            <div className="land2">
              <div className="carry">
                <img
                  alt="Work From Home illustration - Free transparent PNG, SVG. No Sign up needed."
                  style={{ width: "100%", height: "100%" }}
                  src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/london/work/work/work-from-home-2dm6tl8nzsobtjw3n434nl.png?_a=AJE+xWI0"
                />
              </div>
              <div className="bolon2">
                <div className="bol_img">
                  <img
                    alt="Laptop Coding illustration - Free transparent PNG, SVG. No Sign up needed."
                    style={{ width: "100%", height: "100%" }}
                    src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/v1/icons/bugs/web-infected-l9p0f9g1g0kx2mx4kxl2ci.png/web-infected-hfh6enxcri8b0sj6ddlzv5.png?_a=AJE+xWI0"
                  />
                </div>
              </div>
              <div className="bolon3">
                <div className="bol_img">
                  <img
                    alt="Laptop Coding illustration - Free transparent PNG, SVG. No Sign up needed."
                    style={{ width: "100%", height: "100%" }}
                    src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/v1/icons/clouds/cloud-download-10-7xdvvaz8rg9n5i8un9st2.png/cloud-download-10-fwis99ehyghcfvpl9v2x3.png?_a=AJE+xWI0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
