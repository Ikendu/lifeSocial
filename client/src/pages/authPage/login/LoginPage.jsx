import { Link } from "react-router-dom";
import "./login.css";
import { useRef } from "react";
import axios from "axios";

function LoginPage() {
  const email = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email.current?.value,
      password: password.current?.value,
    };
    console.log(userData);

    try {
      const resp = await axios.post(`auth/login`, userData);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
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
          <form className="loginBox">
            <input
              type="email"
              required
              placeholder="username"
              className="loginInput"
              ref={email}
              autoComplete="true"
            />
            <input
              type="password"
              required
              placeholder="password"
              className="loginInput"
              ref={password}
              autoComplete="true"
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
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
