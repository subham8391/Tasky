import React from 'react';

const SidebarTab = ({ tab, activeTab, setActiveTab, isSidebarExpanded }) => (
  <div
    className={`tab ${activeTab === tab.name ? 'tab-active' : ''}`}
    onClick={() => setActiveTab(tab.name)}
  >
    <span className="mr-2 text-[20px] text-blue-500">{tab.icon}</span>
    {isSidebarExpanded && <span className="tab-name">{tab.name}</span>}
    {isSidebarExpanded && tab.count > 0 && <span className="tab-count">{tab.count}</span>}
  </div>
);

export default SidebarTab;
