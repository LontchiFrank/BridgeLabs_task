import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { _getCategories } from "../../redux/actions/categories";

function Home() {
  const [category, setCategor] = useState();
  useEffect(() => {
    _getCategories()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* <div style={{ width: "15%", height: "100%" }}> */}
      <Navbar />
      {/* </div> */}
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
