import React, { useState, useEffect } from "react";
import tick from "../../assets/1.jpg";
import cross from "../../assets/2.png";
import "./alert.css";

function Alert({ shows, toggleAlert, type }) {
  useEffect(() => {
    if (shows) {
      setTimeout(() => {
        console.log("This will run after 1 second!");
        toggleAlert();
      }, 2000);
    }
  }, [shows]);

  return (
    shows && (
      <>
        <div className="main1">
          <div className="modal_form1">
            <div style={{ width: "100%", height: "60%" }}>
              {type == "success" ? (
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
              {type == "success" ? <h3>Success</h3> : <h3>Failed</h3>}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Alert;
