import React from 'react';
import "../styles/Buttons.css"
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const buttons = ["Log Out", "Puntos", "Beneficios", "Reservaciones"];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    navigate("/Login");
  };

  return (
    <div className="buttons-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="top-button"
          onClick={
            button === "Log Out" 
              ? handleLogout 
              : button === "Beneficios" 
                ? () => navigate("/benefits") 
                : null
          }
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
