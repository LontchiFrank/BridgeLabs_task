import React, { useRef, useState } from "react";
import "../Signup/Signup.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
function Signin() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  //   const second = useRef(null);

  const [emailData, setEmailData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = emailData;

  const loginChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit2 = (e) => {
    e.preventDefault();
    // const data = { emailData };
    login(emailData)
      .then(() => {
        navigate("/home");
        console.log("successful");
      })
      .catch((err) => {
        console.log(err, "Failed");
      });
  };

  return (
    <div>
      <div className="title-head">
        <h2>Sign In</h2>
      </div>
      <div className="form-part">
        <form onSubmit={(e) => onSubmit2(e)} className="forms">
          <div className="lay1">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => loginChange(e)}
              placeholder="Enter Email"
            />
          </div>
          <div className="lay1">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => loginChange(e)}
              value={password}
              placeholder="Enter Password"
            />
          </div>
          <div className="bton1">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
