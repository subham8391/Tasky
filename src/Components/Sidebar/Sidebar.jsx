import React from 'react';
import { FaAngleLeft, FaBars } from 'react-icons/fa';

import SidebarTab from './SidebarTab';
import { tabs } from '../../ConstantData';

const Sidebar = ({ activeTab, setActiveTab, isSidebarExpanded, setIsSidebarExpanded }) => {

  return (
    <div className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        {isSidebarExpanded && (<div className="slider-header">DASHBOARDS</div>)}
      {isSidebarExpanded && (<div className="sidebar-title">DASHBOARDS</div>)}
      {tabs.map((tab) => (
        <SidebarTab
          key={tab.name}
          tab={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarExpanded={isSidebarExpanded}
        />
      ))}
      <div className="user-profile">
        <img
          src={`https://i.pravatar.cc/150?img=68`}
          alt="user-avatar"
          className="user-avatar"
        />
        {isSidebarExpanded && (
          <div>
            <div className="user-info">Subham Das</div>
            <div className="user-role">Developer</div>
          </div>
        )}
      </div>
      <div
        className="toggle-button"
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
      >
        {isSidebarExpanded ? <FaAngleLeft /> : <FaBars />}
      </div>
    </div>
  );
};

export default Sidebar;
