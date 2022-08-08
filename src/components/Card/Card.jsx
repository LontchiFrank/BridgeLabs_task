import React, { useState } from "react";
import "./card.css";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import Modal from "../Modal/Modal";
import EditModal from "../EdiModal/EditModal";
import DelModal from "../DelModal/DelModal";
function Card({ el }) {
  const [check, setCheck] = useState([
    { back: "#e1f5fe", text: "#63c2ed" },
    { back: "#f8e1fd", text: "#dc7bf1" },
    { back: "#fde7dc", text: "#e1733b" },
    { back: "#dbfdee", text: "#4ad296" },
  ]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const couleur = check[Math.floor(Math.random() * check.length)];

  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit);
    } else {
      return string;
    }
  }
  function truncateStringDescription(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit);
    } else {
      return string;
    }
  }
  const handleUpdate = () => {
    setShow(true);
    console.log(show);
  };

  const handleDelete = () => {
    setShow1(true);
  };

  console.log(show1);
  const date = truncateString(el.created_at, 10);
  const describe = truncateStringDescription(el.description, 12);

  return (
    <div className="card">
      <DelModal catID={el.id} show={show1} onClose={() => setShow1(false)} />
      <EditModal category={el} show={show} onClose={() => setShow(false)} />
      <div className="card_head">
        <div className="card_name" style={{ backgroundColor: couleur.back }}>
          <h4 style={{ color: couleur.text }}>{el.name} </h4>
        </div>
      </div>
      <div className="card_body">
        <img src={el.image} alt="" style={{ width: "100%", height: "100%" }} />
        <figcaption>
          <div onClick={() => handleUpdate()}>
            <h3 style={{ marginRight: "8px" }}>
              <FaIcons.FaPen />{" "}
            </h3>
          </div>
          <div onClick={() => handleDelete()}>
            <h3 className="delete">
              {" "}
              <FaIcons.FaTrash />
            </h3>
          </div>
        </figcaption>
      </div>
      <div className="card_footer">
        <div
          className="card_name"
          style={{
            marginTop: "20px",
            marginLeft: "13px",
            backgroundColor: "#F1F2F3",
          }}
        >
          <h4 style={{ color: "#828487" }}>{date} </h4>
        </div>
        <div className="discript">
          <p style={{ color: "#828487" }}>Description</p>
          <p style={{ color: "#828487" }}>{describe}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
