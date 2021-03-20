import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState(null);
  const [passwd, setPasswd] = useState(null);

  const onSubmitHandler = () => {
    const data = { email: email, password: passwd };
    axios.post("http://localhost:9000/stusignup", data);
  };
  return (
    <div className="login-wrapper">
      <div className="col-11 col-lg-5">
        <div>Sign Up</div>
        <br></br>
        <div>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>

        <div>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="passwd"
            className="form-control"
            onChange={(e) => setPasswd(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark float-right"
          onClick={() => onSubmitHandler()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
