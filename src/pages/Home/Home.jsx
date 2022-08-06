import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { _getCategories } from "../../redux/actions/categories";

function Home() {
  const [category, setCategory] = useState();
  useEffect(() => {
    _getCategories()
      .then((data) => {
        setCategory(data.payload);
        console.log(category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="set">
      {/* <div style={{ width: "15%", height: "100%" }}> */}
      <Navbar />
      {/* </div> */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f6f6ff",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            backgroundColor: "white",
            padding: "4em",
            border: "12px",
          }}
        >
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
