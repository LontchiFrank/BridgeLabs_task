import React, { useState } from "react";
import "./card.css";
function Card({ el }) {
  const [check, setCheck] = useState([
    { back: "#e1f5fe", text: "#63c2ed" },
    { back: "#f8e1fd", text: "#dc7bf1" },
    { back: "#fde7dc", text: "#e1733b" },
    { back: "#dbfdee", text: "#4ad296" },
  ]);
  const couleur = check[Math.floor(Math.random() * check.length)];
  console.log(couleur);

  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit);
    } else {
      return string;
    }
  }
  function truncateStringDescription(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }

  const date = truncateString(el.created_at, 10);
  const describe = truncateStringDescription(el.description, 12);

  return (
    <div className="card">
      <div className="card_head">
        <div className="card_name" style={{ backgroundColor: couleur.back }}>
          <h4 style={{ color: couleur.text }}>{el.name} </h4>
        </div>
      </div>
      <div className="card_body">
        {/* <img src={el.image} alt="" style={{ width: "100%", height: "100%" }} /> */}
        <img
          src="https://www.freepik.com/vectors/love-heart"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
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
