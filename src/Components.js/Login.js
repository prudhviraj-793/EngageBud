import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [content, setContent] = useState("Try Your Luck");
  const navigate = useNavigate();
  function clickHandler(e) {
    e.preventDefault();
    setContent("Loading...");
    setTimeout(() => {
      navigate("/spinWheel");
    }, 2000);
  }
  return (
    <div className="d-flex m-2 p-2 flex-column" style={{ maxWidth: "300px" }}>
      <div className="row">
        <h3>This is how EngageBud looks in action!</h3>
      </div>
      <div className="row flex-sm-column">
        <form>
          <div className="mb-3">
            <label className="from-label">Email</label>
            <input
              type="email"
              placeholder="user@mail.com"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="from-label">Phone Number</label>
            <input
              type="phone number"
              placeholder="+91-98765XXXXX"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input type="checkbox" className="form-check-input m-1" required />
            <label className="from-label">
              I agreed the terms and conditions
            </label>
          </div>
          <button
            onClick={clickHandler}
            type="submit"
            className="btn btn-primary"
          >
            {content}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
