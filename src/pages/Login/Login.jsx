import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signup, login, resetPassword } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentState === "Sign Up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img className="logo" src={assets.logo_big} alt="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up" ? (
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-input"
            type="text"
            placeholder="Username"
            required
          />
        ) : null}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          type="password"
          placeholder="Password"
          required
        />
        <button>{currentState === "Sign Up" ? "Sign Up" : "Login"}</button>
        <div className="login-forgot">
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?
              <span onClick={() => setCurrentState("Login")}>Click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Don't have an account yet?
              <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
            </p>
          )}

          {currentState === "Login" ? (
            <p className="login-toggle">
              Forgot Password?
              <span onClick={() => resetPassword(email)}>Reset Here</span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
