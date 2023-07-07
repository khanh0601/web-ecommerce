import React, { useState } from 'react';
import './login.css'
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="login">
      <div className="main-login">
        <div className="top">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
        <form>
          <h1>SING IN YOUR ACCOUNT</h1>
          <input className="usr put" placeholder="Email or Username" type="text" />
          <br />
          <input
            id="pass"
            className="pss put"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <button
            id="bhde"
            onClick={togglePasswordVisibility}
            className="shw"
            type="button"
          >
            {showPassword ? "hide" : "show"}
          </button>
          <a className="pass" href="">
            <p>Forgot Password</p>
            
          </a>
          <input value="Sign In" id="btn" className="sub" type="submit" />
          <div className="lines">
            <div style={{ backgroundColor: "#a5a5a5" }} className="line"></div>
            <p style={{ color: "#a5a5a5" }} className="p-b">
              or
            </p>
            <div style={{ backgroundColor: "#a5a5a5" }} className="line"></div>
          </div>
          <button
            style={{ border: "2px solid" }}
            id="btn"
            className="sub pic facebook"
            type="submit"
          >
            <div className="logo2"></div>
            Sign in with Facebook
          </button>
          <button
            style={{ border: "2px solid" }}
            id="btn"
            className="sub pic google"
            type="submit"
          >
            <div className="logo"></div>
            Sign in with Google
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;