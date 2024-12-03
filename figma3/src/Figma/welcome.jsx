import { useNavigate } from "react-router-dom";
import "./index.css";

function Welcome() {
  const navigate = useNavigate();

 
  const handleSkip = () => {
    navigate("/skip");
  };


  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    navigate("/google");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login initiated");
    navigate("/facebook");
  };

  return (
    <div className="signin-container">
  
      <button className="skip-btn" onClick={handleSkip}>Skip</button>
      
      <h1 className="welcome">
        Welcome to <span className="foodhub-title"><br />FoodHub </span>
      </h1>
      <p>Your favourite foods delivered fast at your door.</p>

      <div className="signin-buttons">
        <p className="sign">Sign in with</p>
      </div>

      <div className="with">
        <button className="facebook-btn" onClick={handleFacebookLogin}>
          <img src="Group 17863.png" alt="Facebook" className="icon"/>FACEBOOK
        </button>

      
        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="Group 17967.png" alt="Google" className="icon"/>GOOGLE
        </button>
      </div>

      <button className="email-btn" onClick={() => { navigate("/signin"); }}>Start with email or phone</button>
      <p className="sign-in-footer">
        Already have an account? <span onClick={() => { navigate("/signin"); }}>Sign In</span>
      </p>
    </div>
  );
}

export default Welcome;
