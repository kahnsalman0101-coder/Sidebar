import React, { useState } from 'react';
import '../style/SidebarFooter.css';

const SidebarFooter = ({ isOpen }) => {
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  return (
    <div className="sidebar-footer">
      {/* Login Icon */}
      <div 
        className={`login-icon-container ${showAuthButtons ? 'active' : ''}`}
        onClick={() => setShowAuthButtons(!showAuthButtons)}
      >
        <div className="login-icon">
          <span className="icon">🔑</span>
        </div>
        
        {/* Auth Buttons Dropdown */}
        {showAuthButtons && (
          <div className="auth-dropdown">
            <button className="auth-btn login-btn">
              <span className="btn-icon">👤</span>
              Login
            </button>
            <button className="auth-btn signup-btn">
              <span className="btn-icon">✍️</span>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFooter;