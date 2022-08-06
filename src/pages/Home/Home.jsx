import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { _getCategories } from "../../redux/actions/categories";
import "./Home.css";

function Home() {
  const [category, setCategory] = useState();
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
          <h1>Home</h1>
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
