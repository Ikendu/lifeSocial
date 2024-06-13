import { Link } from "react-router-dom";
import "./login.css";
import { useRef } from "react";

function LoginPage() {
  const email = useRef();
  const password = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
  };
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
            <input
              type="email"
              required
              placeholder="username"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              placeholder="password"
              className="loginInput"
              ref={password}
            />
            <button onClick={handleLogin} className="loginButton">
              Login
            </button>
            <span className="loginForgot">Forgot password? </span>
            <hr />
            <p className="loginRegister">
              Do not have account yet?{` `}
              <Link to={`/register`} className="link">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
