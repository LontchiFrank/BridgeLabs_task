import React, { useState, useEffect } from "react";
import tick from "../../assets/1.jpg";
import cross from "../../assets/2.png";
import "./alert.css";
function Alert({ bool, shows }) {
  const [toggle, setToggle] = useState(bool);
  const [isOpen, setIsOpen] = useState(true);
  console.log(bool);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("This will run after 1 second!");
  //       setIsOpen(false);
  //     }, 2000);
  //     // return () => setIsOpen(false);
  //   }, []);

  if (!shows) {
    return null;
  }
  return (
    <>
      {isOpen ? (
        <div className="main1">
          <div className="modal_form1">
            <div style={{ width: "100%", height: "60%" }}>
              {toggle ? (
                <img
                  src={tick}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <img
                  src={cross}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <div style={{ width: "100%", height: "60%" }}>
              {toggle ? <h3>Success</h3> : <h3>Failed</h3>}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Alert;
