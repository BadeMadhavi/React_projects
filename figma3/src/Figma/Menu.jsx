import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; 
import "./menu.css"

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');  
    sessionStorage.removeItem('authToken');
    navigate('/');
  }

  const handleclick=()=>{
    navigate('/menupage')
  }
  return (
    <div className="menu-container">
      <img   onClick={handleclick}  src="menu.png" alt="menu" />
      <button onClick={handleLogout} className="logout-button">
        <FaSignOutAlt size={24} style={{ marginRight: '10px' }} />
        Logout
      </button>
    </div>
  );
};

export default Menu;
