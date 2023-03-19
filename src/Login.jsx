import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <h2>User Login</h2>

        <input type="email" placeholder="  Email" className="inputbox" />
        <input type="password" placeholder="  Password" className="inputbox" />
        <Link to={"/generator"}>
          <input type="submit" className="btn" value={"Login"} />
        </Link>
      </div>
    </div>
  );
}

export default Login;
