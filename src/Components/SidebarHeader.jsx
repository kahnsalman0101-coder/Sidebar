import React from 'react';
import '../style/SidebarHeader.css';

const SidebarHeader = ({ isOpen }) => {
  return (
    <div className="sidebar-header">
      <div className="logo-container">
        <div className="logo-glow">
          <div className="logo-icon">⚡</div>
        </div>
        <h3 className="logo-text">Side<span className="logo-highlight">Bar</span></h3>
      </div>
      <p className="sidebar-tagline">Your workspace, simplified</p>
    </div>
  );
};

export default SidebarHeader;