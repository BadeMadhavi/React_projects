import React from "react";
import { useNavigate } from "react-router-dom";
import "./category.css";

const pizzas = [
  {
    id: 1,
    name: "Chicken Hawaiian",
    description: "Chicken, Cheese, and Pineapple",
    price: "$10.35",
    rating: 4.5,
    image: "image 80.png", // Add image URLs if available
  },
];

function Category() {
  const navigate = useNavigate();

  const handlePizzaClick = (pizzaId) => {
    // Navigate to food details page and pass pizzaId in state
    navigate(`/fooddetails`, { state: { pizzaId } });
  };

  return (
    <div className="category-container">
      <img className="pizzacorner" src="Group 18048.png" alt="side pizza" />
      <h1 className="category-title">
        Fast <span className="category-highlight">Food</span>
      </h1>
      <p className="category-subtitle">80 types of pizza</p>
      <div className="category-sort-section">
        <span>Sort by:</span> <span className="category-popular">Popular</span>
      </div>
      <div className="category-pizza-list">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="category-pizza-card"
            onClick={() => handlePizzaClick(pizza.id)} // Add click handler
            style={{ cursor: "pointer" }} // Add a pointer cursor
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="category-pizza-image"
            />
            <div className="category-price">{pizza.price}</div>
            <h2 className="category-pizza-name">{pizza.name}</h2>
            <p className="category-description">{pizza.description}</p>
            <div className="category-rating">⭐ {pizza.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
