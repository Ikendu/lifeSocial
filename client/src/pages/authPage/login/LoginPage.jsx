import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

function LoginPage() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(`USER`, user);
  // useEffect(() => {
  //   if (user) return navigate(`/`);
  // }, []);

  const handleLogin = async (e) => {
    //prevent default browser behavior
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    //get the users details from ref
    const userData = {
      email: email.current?.value,
      password: password.current?.value,
    };
    //set the users details to database for login comfirmation
    try {
      const resp = await axios.post(`auth/login`, userData);
      //set the users details to context provider for use in all components
      dispatch({ type: "LOGIN_SUCCESS", payload: resp.data });

      // navigate(`/`);
      //handle occational error
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  };
  console.log(`USERDATA`, user);
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
            <button
              onClick={handleLogin}
              className="loginButton"
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                `Login`
              )}
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
