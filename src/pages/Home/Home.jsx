import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";
import { _getCategories } from "../../redux/actions/categories";
import "./Home.css";

function Home() {
  const [category, setCategory] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    _getCategories()
      .then((data) => {
        setCategory(data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(category);
  return (
    <div className="set">
      <Modal show={show} onClose={() => setShow(false)} />
      {/* <div style={{ width: "15%", height: "100%" }}> */}
      <Navbar />
      {/* </div> */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            borderRadius: "18px",
            backgroundColor: "#f6f9fe",
            padding: "4em",
            border: "12px",
          }}
        >
          <div className="fill">
            <div className="bton1">
              <button onClick={() => setShow(true)}>
                Create New <FaPlus />{" "}
              </button>
            </div>
          </div>
          <div className="hold">
            {category &&
              category.map((el, key) => (
                <div key={key} className="arrainged">
                  <Card el={el} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
