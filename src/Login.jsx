import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function toggleRoute() {
    if (email == "user123@gmail.com" && pass == "user123") {
      navigate("/generator");
    } else {
      alert("User not found");
      
    }
  }
  return (
    <div className="container">
      <div className="login-form">
        <h2>User Login</h2>

        <input
          type="email"
          placeholder="  Email"
          className="inputbox"
          onChange={(value) => setEmail(value.target.value)}
        />
        <input
          type="password"
          placeholder="  Password"
          className="inputbox"
          onChange={(value) => setPass(value.target.value)}
        />

        <input
          type="submit"
          className="btn"
          value={"Login"}
          onClick={toggleRoute}
        />
      </div>
    </div>
  );
}

export default Login;
