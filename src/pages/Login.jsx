import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import axiosConfig from "../services/http";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors,  setErrors] = useState({});

  // Define the function to handle form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Define the login data
    const loginData = {
      email: email,
      password: password,
    };

    // Send a POST request with the login data
    try {
      const response = await axiosConfig.post('auth/login', loginData);
      if (response.status === 200) {
        const token = response.data.token;
        const user = jwtDecode(token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/")
        
      }
    } catch (error) {
      setErrors({invalidCredentials: "Invalid credentials"});
      console.error('Error:', error);
    }
  }
  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Log in</h1>
          {errors.invalidCredentials && <p className="error-login">{errors.invalidCredentials}</p>}
          <div className="input-box">
          <input           
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address" 
          required />
          <i className="bx bxs-user" />
        </div>
        <div className="input-box">
          <input           
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required />
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

