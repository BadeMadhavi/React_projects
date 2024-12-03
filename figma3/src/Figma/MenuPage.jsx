import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./menupage.css";

function MenuPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();  // Initialize navigation hook

  const restaurants = [
    { name: "McDonald's", img: "Group 18162.png", category: "restaurant" },
    // Add more restaurants as needed
  ];

  // Filter restaurants based on search and category
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      (selectedCategory === "All" || restaurant.category === selectedCategory) &&
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleRestaurantClick = (category) => {
    navigate(`/category`);  // Navigate to category page
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="top-bar">
        <div className="line-button"></div>
        <div className="delivery-info">
          <span>Deliver to</span><br />
          <strong>4102 Pretty View Lane</strong>
        </div>
        <img src="Mask Group.png" alt="" className="profile-icon" />
      </header>

      {/* Search Section */}
      <div className="header">
        <h1>What would you like to order</h1>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Find food or restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="filter-dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Burger">Burger</option>
            <option value="Donut">Donut</option>
            <option value="Pizza">Pizza</option>
            <option value="Mexican">Mexican</option>
            <option value="Asian">Asian</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <section className="categories">
        <button className="category" onClick={() => handleRestaurantClick("Burger")}>
          <img src="Group 17821.png" alt="Burger" />
        </button>
        <button className="category" onClick={() => handleRestaurantClick("Donut")}>
          <img src="Group 17818.png" alt="Donut" />
        </button>
        <button className="category" onClick={() => handleRestaurantClick("Pizza")}>
          <img src="Group 17820.png" alt="Pizza" />
        </button>
        <button className="category" onClick={() => handleRestaurantClick("Mexican")}>
          <img src="Group 17817.png" alt="Mexican" />
        </button>
        <button className="category" onClick={() => handleRestaurantClick("Asian")}>
          <img src="Group 17822.png" alt="Asian" />
        </button>
      </section>

      <section className="featured">
        <h2>Featured Restaurants</h2>
        <button className="view-all">View All</button>
      </section>

      {/* Display Restaurants */}
      <div className="restaurants">
        {filteredRestaurants.map((restaurant) => (
          <div
            className="restaurant"
            key={restaurant.name}
            onClick={() => handleRestaurantClick(restaurant.category)}  // Navigate to category on image click
          >
            <img src={restaurant.img} alt={restaurant.name} />
            <p>{restaurant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
