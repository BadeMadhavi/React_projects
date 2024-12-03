import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    navigate('/verify', { state: { email } }); // Navigate to Verify Code
  };

const handlepassword=()=>{
  navigate("/forgotpassword")
}
  return (
    <div className="login-container">
      <img  src="Path 3391.png" className="back-arrow" alt="arrow" onClick={() => navigate(-1)}/>

      <h2 className="login-header">Do you have  Google Account </h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">E-mail:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          placeholder='write your  email or phone'
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          />
        </div>
        <p className='forgot' onClick={handlepassword}>Forgot password?</p>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="signup-text">
        Don't have an account?{' '}
        <button
          className="signup-btn"
          onClick={() => navigate('/signin')}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
