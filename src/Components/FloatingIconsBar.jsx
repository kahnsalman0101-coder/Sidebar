import React, { useState } from 'react';
import '../style/FloatingIconsBar.css';

const FloatingIconsBar = ({ toggleSidebar, menuItems }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  const iconColors = [
    '#4a6fa5', // Blue
    '#6f42c1', // Purple
    '#2d8f4b', // Green
    '#f59e0b', // Yellow
    '#ec4899', // Pink
  ];

  return (
    <div className="floating-icons-container">
      {/* Main Floating Button */}
      <div 
        className="floating-main-btn" 
        onClick={toggleSidebar}
        onMouseEnter={() => setHoveredIcon('menu')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {hoveredIcon === 'menu' && <span className="floating-tooltip">Open Menu</span>}
      </div>

      {/* Floating Icons */}
      <div className="floating-icons-wrapper">
        {menuItems.map((item, index) => (
          <div 
            key={item.id}
            className="floating-icon-circle"
            style={{ '--icon-color': iconColors[index] }}
            onMouseEnter={() => setHoveredIcon(item.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="icon">{item.icon}</span>
            {hoveredIcon === item.id && (
              <span className="floating-tooltip">{item.name}</span>
            )}
          </div>
        ))}
      </div>

      {/* User Icon */}
      <div 
        className="floating-user-btn"
        onClick={() => setShowAuthButtons(!showAuthButtons)}
        onMouseEnter={() => setHoveredIcon('user')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <div className="user-avatar">
          <span className="user-icon">👤</span>
        </div>
        {hoveredIcon === 'user' && <span className="floating-tooltip">User Profile</span>}
        
        {/* Auth Buttons Dropdown */}
        {showAuthButtons && (
          <div className="auth-dropdown">
            <div className="dropdown-content">
              <div className="user-info-preview">
                <span className="dropdown-avatar">👤</span>
                <div>
                  <p className="dropdown-username">John Doe</p>
                  <p className="dropdown-email">john@example.com</p>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-btn login-btn">
                <span>🔑</span> Login
              </button>
              <button className="dropdown-btn signup-btn">
                <span>📝</span> Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingIconsBar;