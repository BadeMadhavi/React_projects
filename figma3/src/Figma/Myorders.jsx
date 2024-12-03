import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./myorder.css";

const Myorder = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle history button click
  const handleHistoryClick = () => {
    navigate('/favourate'); // Navigate to the Favorites page
  };

  return (
    <div className="order-page">
      <header className="header">
        <h3>My Orders</h3>
        <img src="Mask Group.png" alt="icon" className="boy" />
        <div className="order-buttons">
          <button className="active">Upcoming</button>
          <button onClick={handleHistoryClick}>History</button> {/* Add onClick handler */}
        </div>
      </header>

      <section className="upcoming-order">
        <div className="order-details">
          <img
            src="image 27.png"
            alt="Starbucks"
            className="order-icon"
          />
          <h5>Starbucks</h5>
          <div className="order-info">
            <p>Order ID: <span>#264100</span></p>
            <p>Estimated Arrival: <span>25 min</span></p>
            <p>Status: <span>Food on the way</span></p>
          </div>
          <div className="order-actions">
            <button className="cancel-button">Cancel</button>
            <button className="track-button">Track Order</button>
          </div>
        </div>
      </section>

      <section className="lasted-orders">
        <h4>Lasted Orders</h4>
        <div className="order-card">
          <img
            src="image 35.png"
            alt="Jimmy John's"
            className="order-icon"
          />
          <div className="order-info">
            <p>Jimmy John's</p>
            <p>Total: <span>$12.10</span></p>
            <p>Status: <span>Order Delivered</span></p>
          </div>
          <div className="rate">
            <button className="reorder-button">Rate</button>
            <button className="reorder-button">Re-Order</button>
          </div>
        </div>

        <div className="order-card">
          <img
            src="image 76.png"
            alt="Subway"
            className="order-icon"
          />
          <div className="order-info">
            <p>Subway</p>
            <p>Total: <span>$9.50</span></p>
            <p>Status: <span>Order Delivered</span></p>
          </div>
          <div className="rate">
            <button className="reorder-button">Rate</button>
            <button className="reorder-button">Re-Order</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Myorder;
