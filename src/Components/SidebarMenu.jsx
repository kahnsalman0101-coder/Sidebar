import React from 'react';
import '../style/SidebarMenu.css';

const SidebarMenu = ({ isOpen, menuItems, closeSidebarOnMobile }) => {
  return (
    <nav className="sidebar-menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <a 
              href="#" 
              className="menu-link"
              onClick={closeSidebarOnMobile}
            >
              <div className="menu-icon-wrapper">
                <span className="menu-icon">{item.icon}</span>
                <div className="menu-icon-glow"></div>
              </div>
              <span className="menu-text">{item.name}</span>
              <div className="menu-arrow">›</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;