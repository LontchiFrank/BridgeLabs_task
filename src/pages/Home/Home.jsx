import React, { useState, useEffect, Suspense } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Alert from "../../components/alert/Alert";

import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";
import { _getCategories } from "../../redux/actions/categories";
import "./Home.css";

function PostSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton_head"></div>
      <div className="skeleton_body"></div>
    </div>
  );
}

function Home() {
  const [category, setCategory] = useState();
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(true);

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

  console.log(category);
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
            <Suspense
              fallback={
                <div>
                  <PostSkeleton />
                </div>
              }
            >
              {category &&
                category.map((el, key) => (
                  <div key={key} className="arrainged">
                    <Card el={el} />
                  </div>
                ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
