import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%", height: "100%" }}>
        <Navbar />
      </div>
      <div>
        <h1>Profile</h1>
        <p>
          Users will not be able to find Switch in react-router-dom. They need
          to install versions up to 5 or below 5. Try the below one, which will
          work. If the user uses routes instead of Switch, it may not work.
        </p>
      </div>
    </div>
  );
}

export default Profile;
