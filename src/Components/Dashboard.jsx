import React, { useState } from 'react';
import TaskBoard from './TaskBoard';
import { FaTasks, FaFileAlt, FaColumns, FaSyncAlt, FaChartBar, FaHome, FaCogs } from 'react-icons/fa';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Tasks');

  const tabs = [
    { name: 'Tasks', icon: <FaTasks />, count: 4 },
    { name: 'Drive Files', icon: <FaFileAlt />, count: 435 },
    { name: 'Boards', icon: <FaColumns />, count: 5 },
    { name: 'Updates', icon: <FaSyncAlt />, count: 0 },
    { name: 'Analytics', icon: <FaChartBar />, count: 2 },
    { name: 'CRM Dashboard', icon: <FaHome />, count: 2 },
    { name: 'Settings', icon: <FaCogs />, count: 2 }
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-title">DASHBOARDS</div>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
            {tab.count > 0 && <span className="tab-count">{tab.count}</span>}
          </div>
        ))}
        <div className="user-profile">
          <img
            src={`https://i.pravatar.cc/150?img=68`}
            alt="user-avatar"
            className="user-avatar"
          />
          <div>
            <div className="user-info">Subham Das</div>
            <div className="user-role">Devloper</div>
          </div>
        </div>
      </div>
      <div className="main-content">
        {activeTab === 'Tasks' && <TaskBoard />}
        {/* Add more tabs  */}
      </div>
    </div>
  );
};

export default Dashboard;
