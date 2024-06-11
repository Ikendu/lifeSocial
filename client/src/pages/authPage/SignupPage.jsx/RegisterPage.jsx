import { Link } from "react-router-dom";
import "./register.css";

function RegisterPage() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLift">
          <h3 className="loginLogo">Ubanet</h3>
          <span className="loginDesc">
            Connect with family, friends and the global community
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="username" className="loginInput" />
            <input type="text" placeholder="email" className="loginInput" />
            <input type="text" placeholder="password" className="loginInput" />
            <input
              type="text"
              placeholder="password again"
              className="loginInput"
            />
            <button className="loginButton">Register</button>
            <hr />
            <p className="loginRegister">
              Already have an account?{` `}
              <Link to={`/login`} className="link">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
