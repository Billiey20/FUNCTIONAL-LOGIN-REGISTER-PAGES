import React, { useState } from 'react';
import Login from "../components/Login"
import Register from "../components/Register"


const AuthContainer = () => {
  const [isActive, setIsActive] = useState(false)
  

  const handleLoginClick = () => {
    setIsActive(false);
  };
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      {isActive ? (
        <Register
         
        />
      ) : (
        <Login
  
        />
      )}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
        
      </div>
      
    </div>
    
  );
  
};

export default AuthContainer;
