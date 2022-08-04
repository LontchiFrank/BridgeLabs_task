import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUsers } from "../../redux/actions/auth";
import "./Signup.css";

function Signup() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    password: "",
  });
  const [emailData, setEmailData] = useState({
    emails: "",
    passwords: "",
  });
  const { emails, passwords } = emailData;
  const [selectedImage, setSelectedImage] = useState();

  const { fname, lname, email, tel, password } = formData;

  const [isOpen, setIsOpen] = useState(false);
  const myElement = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);

  const handleClick = () => {
    first.current.style.transform = "translateX(700px)";
    first.current.style.transition = "3s";
    first.current.style.zIndex = "3";
    second.current.style.transform = "translateX(-450px)";
    second.current.style.transitionDelay = "1s";
    second.current.style.transition = "3s";
    second.current.style.transitionTimingFunction = "linear";
    setIsOpen(true);
  };

  const handleSecondClick = () => {
    first.current.style.transform = "translateX(0px)";
    first.current.style.transition = "3s";
    first.current.style.zIndex = "3";
    second.current.style.transform = "translateX(0px)";
    // second.current.style.transitionDelay = "1s";
    second.current.style.transition = "3s";
    second.current.style.transitionTimingFunction = "linear";

    setIsOpen(false);
    console.log(isOpen);
  };
  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, selectedImage };
    registerUsers(data)
      .then(() => {
        console.log("Successfull");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err, "Failed");
      });
  };

  const onSubmit2 = (e) => {
    e.preventDefault();
    const data = { emailData };
  };

  console.log(selectedImage);
  return (
    <div className="main">
      <div className="container-middle">
        <div className="firstpart" ref={first}>
          <div className="overlay">
            <div className="head">
              <h3>Digital</h3>
            </div>
            <div className="title">
              <h1>
                Artificial Intelligence Driving Results for the Travel Industry
              </h1>
            </div>
            <div className="bodies">
              <p>
                Discover the world's best Travel Industries using Artificial
                Intelligence
              </p>
            </div>
            <div className="foot">
              <p>
                Simply Unbelievable satisfied with my projects and business.! If
                you already have an account Login.
              </p>

              {isOpen ? (
                <div className="bton">
                  <button onClick={() => handleSecondClick()}>Register</button>
                </div>
              ) : (
                <div className="bton">
                  <button onClick={() => handleClick()}>Login</button>
                </div>
              )}
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="secondpart" ref={second}>
            <div className="title-head">
              <h2>Sign In</h2>
            </div>
            <div className="form-part">
              <form onSubmit={(e) => onsubmit(e)} className="forms">
                <div className="lay1">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={emails}
                    name="emails"
                    onChange={() => loginChange()}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="lay1">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="passwords"
                    onChange={() => loginChange()}
                    value={passwords}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="bton1">
                  <button>Login</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="secondpart" ref={second}>
            <div className="title-head">
              <h2>Sign Up</h2>
            </div>
            <div className="form-part">
              <form onSubmit={(e) => onsubmit(e)} className="forms">
                <div className="lay1">
                  <label>First Name:</label>
                  <input
                    name="fname"
                    type="text"
                    value={fname}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="lay1">
                  <label>Last Name:</label>
                  <input
                    name="lname"
                    type="text"
                    value={lname}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="lay1">
                  <label>Email:</label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="lay1">
                  <label>Telephone Number:</label>
                  <input
                    name="tel"
                    type="tel"
                    value={tel}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Telephone Number"
                  />
                </div>
                <div className="lay1">
                  <label>Password:</label>
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="lay2">
                  <label>Upload Image</label>
                  <div className="files_bton">
                    <input
                      type="file"
                      id="file"
                      name="img"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <label for="file">Choose File</label>
                  </div>
                </div>
                <div className="bton1">
                  <button type="submit">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
