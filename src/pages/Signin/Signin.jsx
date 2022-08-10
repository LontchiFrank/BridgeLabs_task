import React, { useRef, useState } from "react";
import "../Signup/Signup.css";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import Alert from "../../components/alert/Alert";
function Signin() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  //   const second = useRef(null);

  const [emailData, setEmailData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = emailData;

  const [showing, setShowing] = useState(false);
  const [createState, setCreateState] = useState("");

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

        setCreateState(true);
      })
      .catch((err) => {
        console.log(err, "Failed");
        setCreateState(false);
      });
  };

  return (
    <div>
      <Alert
        bool={showing}
        toggleAlert={() => setShowing(!showing)}
        type={createState == true && "success"}
        shows={showing}
      />
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
        <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
          <p>
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
