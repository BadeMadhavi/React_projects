import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./fav.css";

const Favourate = () => {
  const [activeTab, setActiveTab] = useState("food");
  const navigate = useNavigate(); // Initialize navigate function

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleProfileClick = () => {
    navigate("/profileform"); // Navigate to the profile page when the profile icon is clicked
  };

  return (
    <div className="favorites-page">
      <header className="favorites-header">
        <h2 style={{ textAlign: "center", marginLeft: "100px" }}>Favorites</h2>
        <div className="profile-icon" onClick={handleProfileClick}>
          <img
            src="Mask Group.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </header>

      <div className="tab-buttons">
        <button
          className={activeTab === "food" ? "active" : ""}
          onClick={() => handleTabClick("food")}
        >
          Food Items
        </button>
        <button
          className={activeTab === "restaurants" ? "active" : ""}
          onClick={() => handleTabClick("restaurants")}
        >
          Restaurants
        </button>
      </div>

      <section className="favorites-content">
        {activeTab === "food" && (
          <div className="food-items">
            <div className="food-card">
              <img
                src="Mask Group (5).png"
                alt="Chicken Hawaiian"
                className="food-image"
              />
              <div className="food-info">
                <h3>Chicken Hawaiian</h3>
                <p>Chicken, Cheese, and Pineapple</p>
                <span className="food-price">$12.20</span>
              </div>
              <button className="favorite-icon">❤️</button>
            </div>

            <div className="food-card">
              <img
                src="Mask Group (6).png"
                alt="Red N Hot Pizza"
                className="food-image"
              />
              <div className="food-info">
                <h3>Red N Hot Pizza</h3>
                <p>Chicken, Chili</p>
                <span className="food-price">$10.35</span>
              </div>
              <button className="favorite-icon">❤️</button>
            </div>
          </div>
        )}

        {activeTab === "restaurants" && (
          <div className="restaurants">
            <p>No favorite restaurants added yet.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Favourate;
