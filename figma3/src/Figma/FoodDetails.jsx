import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './fooddetails.css';

const FoodDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleClick = () => {
    navigate('/cart'); // Ensure the path is correct in your routes
  };

  return (
    <div className="food-container">
      <div className="product">
        <img
          src="Mask Group (1).png"
          alt="Ground Beef Tacos"
          className="product-image"
        />
        <h2>Ground Beef Tacos</h2>
        <div className="product-info">
          <p className="rating">
            <span>⭐ 4.5 (30+)</span> <a href="/">See Review</a>
            <span className="price">$9.50</span>
          </p>
        </div>
        <p className="description">
          Brown the beef better. Lean ground beef – I like to use 85% lean
          Angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </p>

        <h3>Choice of Add-On</h3>
        <div className="addons">
          <label className="addon">
            <input type="radio" name="addon" value="pepper" />
            <span className="circle"></span>
            <span className="text">Pepper Julienned</span>
            <span className="price">$2.30</span>
          </label>
          <label className="addon">
            <input type="radio" name="addon" value="spinach" />
            <span className="circle"></span>
            <span className="text">Baby Spinach</span>
            <span className="price">$4.70</span>
          </label>
          <label className="addon">
            <input type="radio" name="addon" value="mushroom" />
            <span className="circle"></span>
            <span className="text">Mushroom</span>
            <span className="price">$2.50</span>
          </label>
        </div>

        <div className="quantity">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleClick}>
          <img src="Path 3414.png" alt="Cart Icon" className="cart-icon" /> Add
          to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
