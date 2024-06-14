import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

function LoginPage() {
  const email = useRef();
  const password = useRef();
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    //prevent default browser behavior
    e.preventDefault();
    //get the users details from ref
    const userData = {
      email: email.current?.value,
      password: password.current?.value,
    };
    console.log(userData);
    //set the users details to database for login comfirmation
    try {
      const resp = await axios.post(`auth/login`, userData);
      // console.log(resp.data);
      //set the users details to context provider for use in all components
      setUser(resp.data);
      console.log(`USERdATA`, user);
      //handle occational error
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
