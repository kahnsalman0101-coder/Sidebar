import React, { useState } from 'react';
import '../style/Sidebar.css';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';
import FloatingIconsBar from './FloatingIconsBar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { id: 1, name: 'Dashboard', icon: '📊' },
    { id: 2, name: 'Analytics', icon: '📈' },
    { id: 4, name: 'Settings', icon: '⚙️' },
    { id: 5, name: 'Messages', icon: '💬' },
    { id: 8, name: 'Help', icon: '❓' },
  ];

  return (
    <>
      {/* Floating Icons Bar - Shows when sidebar is closed */}
      {!isOpen && (
        <FloatingIconsBar 
          toggleSidebar={toggleSidebar}
          menuItems={menuItems.slice(0, 5)}
        />
      )}

      {/* Mobile Overlay - Shows when sidebar is open on mobile */}
      {isOpen && window.innerWidth <= 768 && (
        <div className="mobile-overlay" onClick={closeSidebar}></div>
      )}

      {/* Main Sidebar Container */}
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        
        {/* Close Button */}
        <div className="sidebar-close-btn" onClick={toggleSidebar}>
          <div className="close-btn-inner">×</div>
        </div>
        
        <SidebarHeader isOpen={isOpen} />
        <SidebarMenu 
          isOpen={isOpen} 
          menuItems={menuItems} 
          closeSidebarOnMobile={closeSidebar}
        />
        <SidebarFooter isOpen={isOpen} />
        
      </div>
    </>
  );
};

export default Sidebar;