import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./review.css";

function Review() {
  const navigate = useNavigate(); // Initialize navigate function

  const reviews = [
    {
      name: "John Doe",
      img: "Group 17772.png",
      Date: "25/06/2020",
      text: "Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote..",
    },
    {
      name: "Jane Smith",
      img: "Group 17772 (1).png",
      Date: "25/06/2020",
      text: "Been a life saver for keeping our sanity during the pandemic, although they could improve some of their UI and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I'd be stir crazy and losing track of days without so....",
    },
  ];

  // Function to navigate to the restaurant page
  const navigateToRestaurant = () => {
    navigate("/restuarant"); // Adjust the path based on your route structure
  };

  return (
    <div className="review-container">
      <div className="mask">
        <h2 onClick={navigateToRestaurant}>Reviews</h2> {/* Add onClick to navigate */}
        <img src="Mask Group.png" alt="boy" className="boy" />
      </div>
      <input type="text" placeholder="Write a review" />
      {reviews.map((review, index) => (
        <div className="review-item" key={index}>
          <div className="review-icon">
            <img src={review.img} alt={`${review.name}'s Icon`} />
          </div>
          <div className="review-content">
            <h2>{review.name}</h2>
            <p>{review.Date}</p>
            <div className="review-text">
              <p>{review.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Review;
