import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./rating.css"

const Rating = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4);

  const handleSubmit = () => {
    navigate("/review");
  };

  return (
    <div className="rating-container">
      <div className="top-image"></div>
      <div className="circle-icon">
        <img
          src="Mask Group (7).png"
          alt="Pizza Hut"
        />
      </div>
      <h2>Pizza Hut</h2>
      <p>4102 Pretty View Lanenda</p>
      <p className="order-status">Order Delivered</p>
      <div className="rating-section">
        <span>Please Rate Delivery Service</span>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={rating >= star ? "active" : ""}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <p className="rating-text">{rating === 4 ? "Good" : "Average"}</p>
      </div>
      <textarea
        className="review-box"
        placeholder="Write your review here.."></textarea>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
