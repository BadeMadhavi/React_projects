import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./forgot.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`A password reset link has been sent to ${email}`);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="forgot-password-container">
          <img  src="Path 3391.png" className="back-arrow" alt="arrow" onClick={() => navigate(-1)}/>
      <h2 className="forgot-password-header">Reset  Password</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <p style={{fontFamily:"Sofia Pro",
              fontSize:"14px",textAlign:"center",marginLeft:"60px",width:"200px",color:"#9796A1"}}>
                Please enter your email address to request a password reset</p>
            <label className="form-label">Enter your email:</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="submit-btn"> Send New Password </button>
        </form>
      ) : (
        <p className="success-message">
         <p> If the email exists, a reset link has been sent. Please check your email inbox.</p> 
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
