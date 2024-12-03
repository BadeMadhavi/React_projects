import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./restuarantrev.css";

function RestaurantReview() {
  const [review, setReview] = useState("");
  const navigate = useNavigate()
  const handleReviewChange = (e) => {
    setReview(e.target.value)
  }

  const handleSubmit = () => {
    alert("Review Submitted: " + review)
    navigate("/menu")
  };

  return (
    <div className="restuarant-container">
      <div className="image-container">
        <img src="Mask Group (8).png" alt="Pizza Hut" className="pizza-image" />
      </div>
      <h1>How was your last order from Pizza Hut?</h1>
      <div className="stars">⭐⭐⭐⭐⭐</div>
      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review here"
        className="review-input"
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
}

export default RestaurantReview;
