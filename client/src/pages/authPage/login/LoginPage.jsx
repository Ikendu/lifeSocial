import "./login.css";

function LoginPage() {
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
            <input type="text" placeholder="password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password? </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;