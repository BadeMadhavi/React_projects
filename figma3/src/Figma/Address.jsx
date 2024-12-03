import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./address.css";

const Address = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    state: "",
    city: "",
    street: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("fullName", formData.fullName)
    localStorage.setItem("mobileNumber", formData.mobileNumber)
    localStorage.setItem("state", formData.state)
    localStorage.setItem("city", formData.city)
    localStorage.setItem("street", formData.street)
    alert("data save into local stroage")
    navigate("/rating")
  }

  return (
    <div className="address-form-container">
      <h2>Add New Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="1234567890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            {formData.state === "Andhra Pradesh" && (
              <>
                <option value="Srikakulam">Srikakulam</option>
                <option value="Vijayawada">Vijayawada</option>
                <option value="Tirupati">Tirupati</option>
              </>
            )}
            {formData.state === "Texas" && (
              <>
                <option value="Houston">Houston</option>
                <option value="Dallas">Dallas</option>
                <option value="Austin">Austin</option>
              </>
            )}
            {formData.state === "Florida" && (
              <>
                <option value="Miami">Miami</option>
                <option value="Orlando">Orlando</option>
                <option value="Tampa">Tampa</option>
              </>
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default Address;
