import { useState } from "react";
import "./verify.css";
import { useNavigate } from "react-router-dom";

const VerificationCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1);
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleButtonClick = (value) => {
    const firstEmptyIndex = code.findIndex((digit) => digit === "");
    if (firstEmptyIndex !== -1) {
      const newCode = [...code];
      newCode[firstEmptyIndex] = value;
      setCode(newCode);
      document.getElementById(`input-${firstEmptyIndex}`).focus();
    }
  };

  const clearCode = () => {
    setCode(["", "", "", ""]);
    document.getElementById("input-0").focus();
  };

  const resendCode = () => {
    setCode(["", "", "", ""]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSubmit = () => {
    // Check if all inputs are filled
    if (code.every((digit) => digit !== "")) {
      alert("Verification code submitted successfully!");
      navigate("/menu"); // Replace with the actual route of your registration page
    } else {
      alert("Please complete the verification code before submitting.");
    }
  };

  return (
    <div className="verification-container">
      <img
        src="Path 3391.png"
        className="back-arrow"
        onClick={() => navigate(-1)}
        alt="Back"
      />
      <div>
             <div className="c">circle</div>
        <div className="c1">circle2</div>
        <div className="c2">circle3</div>
        </div>   
      <h2>Verification Code</h2>
      <p className="code">Please type the verification code sent to your email</p>
      <div className="code-inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleInputChange(e.target.value, index)}
            maxLength={1}
          />
        ))}
      </div>
      <p>
        Didn't receive a code?{" "}
        <span onClick={resendCode} className="resend">
          Resend Code
        </span>
      </p>

      <div className="calculator-buttons">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((char) => (
          <button key={char} onClick={() => handleButtonClick(char)}>
            {char}
          </button>
        ))}
        <button onClick={clearCode} className="clear-button">
          Clear
        </button>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <p>A new verification code has been sent to your email!</p>
        </div>
      )}
    </div>
  );
};

export default VerificationCode;
