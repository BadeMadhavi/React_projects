import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./profile.css";

const ProfileForm = () => {
  // Initialize formData with values directly from localStorage (or empty string if not available)
  const [formData, setFormData] = useState({
    fullName: localStorage.getItem("fullName") || "",
    email: localStorage.getItem("email") || "",
    phoneNumber: localStorage.getItem("phoneNumber") || "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("fullName", formData.fullName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("phoneNumber", formData.phoneNumber);
    alert("date save into local storage")
    navigate("/address")
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="Mask Group.png" alt="Profile" className="profile-img" />
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Save</button>
      </form>
    </div>
  );
};

export default ProfileForm;
