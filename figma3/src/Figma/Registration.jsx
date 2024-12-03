import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default to India
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      alert(`Verification code sent to ${countryCode} ${phoneNumber}`);
      navigate("/verify"); // Navigate to the verification page
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value.slice(0, 10)); // Limit phone number to 10 digits
  };

  return (
    <div className="registration-container">
          <img  src="Path 3391.png" className="back-arrow" alt="arrow"  onClick={() => navigate(-1)}/>
          <div>
             <div className="circle">circle</div>
        <div className="circle1">circle2</div>
        <div className="circle2">circle3</div>
        </div>   
      <h2>Registration</h2>
      <p>Enter your phone number to verify your account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="country-phone-input">
            <select
              className="country-code-dropdown"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">India (+91)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+81">Japan (+81)</option>
            </select>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              required
              maxLength="10"
              className="form-input"
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Registration;
