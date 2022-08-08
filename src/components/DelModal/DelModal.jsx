import React, { useState } from "react";
import { _deleteCategory } from "../../redux/actions/categories";
import Alert from "../alert/Alert";
import "./Del.css";

function DelModal({ show, onClose, catID }) {
  const [showing, setShowing] = useState(false);
  if (!show) {
    return null;
  }

  const deleteCategory = () => {
    _deleteCategory(catID)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main3">
      <Alert
        bool={showing}
        toggleAlert={() => setShowing(!showing)}
        shows={showing}
      />
      <div className="del">
        <h3 style={{ marginBottom: "2em" }}>
          Are you sure you want to Delete?
        </h3>
        <div className="del_bton">
          <div className="bton2">
            <button onClick={onClose}>Cancel</button>
          </div>
          <div className="bton3">
            <button onClick={() => deleteCategory()}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelModal;
