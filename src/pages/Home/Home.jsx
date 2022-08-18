import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useLottie } from "lottie-react";
import { useDispatch } from "react-redux";
import Alert from "../../components/alert/Alert";
import Lottie from "lottie-react";
import loader from "../../json/loader.json";

import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";
import { _getCategories } from "../../redux/actions/categories";
import "./Home.css";

function PostSkeleton() {
  console.log("heya one to work");
  return (
    <div className="skeleton">
      <div className="skeleton_head"></div>
      <div className="skeleton_body"></div>
    </div>
  );
}

function Post() {
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(true);
  const [category, setCategory] = useState();
  useEffect(() => {
    _getCategories()
      .then((data) => {
        setCategory(data.payload);
        setShowing(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const options = {
    animationData: loader,
    loop: true,
  };
  const { View } = useLottie(options);
  console.log(category);
  return (
    <div className="hold">
      {category && category.length === null ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70%", height: "70%" }}>{View}</div>
        </div>
      ) : (
        category &&
        category.map((el, key) => (
          <div key={key} className="arrainged">
            <Card el={el} />
          </div>
        ))
      )}
    </div>
  );
}

function Home() {
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    _getCategories()
      .then((data) => {
        // setCategory(data.payload);
        setShowing(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="set">
      <Modal show={show} onClose={() => setShow(false)} />
      <Navbar />
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
            {/* <Suspense fallback={<PostSkeleton />}>
           
            </Suspense> */}
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
