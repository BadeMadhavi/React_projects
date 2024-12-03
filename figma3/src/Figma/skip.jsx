import { useNavigate } from "react-router-dom"; 
import "./index.css";

function Skip() {
  const navigate = useNavigate();
  return (
    <div className="signin-container">
       <h1 className="welcome">
        Welcome to <span className="foodhub-title"><br />FoodHub </span>
      </h1>
      <p>Your favourite foods delivered fast at your door.</p>

      <div className="signin-buttons">
        <p className="sign">Sign in with</p>
      </div>

      <div className="with">
        <button className="facebook-btn">
          <img src="Group 17863.png" alt="Facebook" className="icon" /> FACEBOOK
        </button>
        <button className="google-btn">
          <img src="Group 17967.png" alt="Google" className="icon" /> GOOGLE
        </button>
      </div>

      <button className="email-btn" onClick={() => { navigate("/signup"); }}>Start with email or phone</button>
      <p className="sign-in-footer">
        Already have an account? <span onClick={() => { navigate("/signin"); }}>Sign In</span>
      </p>
    </div>
  )
}

export default Skip;
