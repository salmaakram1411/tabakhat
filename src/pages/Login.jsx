import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Login.css';

function Login() {
  return (
    <div className="container">
      <div className="login">
        <form>
          <h1>Log in</h1>
          <div className="input-box">
            <input type="text" placeholder="Email Address" required />
            <i className="bx bxs-user" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> remember me
            </label>
            <a href="#/">forgot password?</a>
          </div>
          <button type="submit" className="btn">Log in</button>
          <div className="register-link">
            <p>Don't have an account? <Link to="/Signupcustomer">Sign up</Link></p>
            {/* Use Link component from react-router-dom to navigate */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

