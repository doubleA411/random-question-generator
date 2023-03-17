import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="innerBox">
        <h1>Admin Login</h1>

        <InputControl
          label="Email"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="footer-login">
          <p className="error">{errorMsg}</p>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
