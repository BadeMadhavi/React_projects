import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    alert("data save into localstorage")
    navigate('/registration')
  }
  const handleFacebookLogin = () => {
    alert('Facebook login functionality to be implemented.')
  }

  const handleGoogleLogin = () => {
    alert('Google login functionality to be implemented.')
  }

  const handlePassword = () => {
    navigate('/forgotpassword')
  };

  return (
    <div className="login-container">

      <div>
             <div className="corner">circle</div>
        <div className="corner2">circle2</div>
        <div className="corner3">circle3</div>
        </div>
      <img
        src="Path 3391.png"
        className="back-arrow"
        alt="arrow"
        onClick={() => navigate(-1)}
      />

      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">E-mail:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write your email or phone"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <p className="forgot" onClick={handlePassword}>
          Forgot password?
        </p>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="signup-text">
        Don't have an account?{' '}
        <button
          className="signup-btn"
          onClick={() => navigate('/signin')}
        >
          Sign Up
        </button>
      </p>

      <div className="signin-buttons2">
        <p className="sign">Sign in with</p>
        <div className="with">
          <button className="facebook-btn" onClick={handleFacebookLogin}>
            <img
              src="Group 17863.png"
              alt="Facebook"
              className="icon"
            />
            FACEBOOK
          </button>
          <button className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="Group 17967.png"
              alt="Google"
              className="icon"
            />
            GOOGLE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;
