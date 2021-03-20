import React, { useState } from "react";
import PropTypes from "prop-types";
import dart from "../../resource/3dArt.png";
import googlelogin from "../../resource/Loginwithgoogle.png";
import somoistlogin from "../../resource/LoginWithSomoist.png";
import robot from "../../resource/robot.png";

import "../Login/Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div>
      <div className="logo">Mozo.js</div>
      <div id="logosh"></div>

      <section className="blurbg"></section>
      <section className="bg_green"></section>

      <div className="home">Home</div>
      <div className="about">About</div>
      <div className="team">Team</div>

      <div className="heading">SOMOIST</div>
      <div className="illustration">
        <img src={dart}></img>
      </div>

      <div className="gb"></div>
      <div className="g"></div>
      <div id="google_login">
        <img src={googlelogin} alt="googlelogin"></img>
      </div>

      <div className="fb"></div>
      <div className="f"></div>
      <div id="somoist_login">
        <img src={somoistlogin} alt="somoistlogin"></img>
      </div>

      <div className="footertext">Soil Moisture Detector</div>
      <div className="footertextsh">Soil Moisture Detector</div>

      <div className="bg2"></div>
      <div className="loginbg"></div>
      <div className="robot">
        <img src={robot} alt="robot"></img>
      </div>
      <div className="login">Login</div>

      <div className="submit"></div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            <p style={{ color: "white" }}>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p style={{ color: "white" }}>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <button
              type="submit"
              style={{
                background: "green",
                color: "white",
                height: "50px",
                width: "100px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="footer"></div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
