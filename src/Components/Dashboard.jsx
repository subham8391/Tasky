import React, { useState } from 'react';
import TaskBoard from './TaskBoard/TaskBoard';
import Sidebar from './Sidebar/Sidebar';
import CommingSoon from './CommingSoon';
import { RiCloseLargeLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Tasks');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <div className="dashboard-container">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
      <div className={`main-content ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        {activeTab === 'Tasks' && <TaskBoard />}
        {activeTab === 'Drive Files' && <CommingSoon />}
        {activeTab === 'Boards' && <CommingSoon />}
        {activeTab === 'Updates' && <CommingSoon />}
        {activeTab === 'Analytics' && <CommingSoon />}
        {activeTab === 'CRM Dashboard' && <CommingSoon />}
        {activeTab === 'Settings' && <CommingSoon />}
      </div>
      <div className="users">
        <div className="uta-btn"><RiCloseLargeLine /></div>
        <div className="user-profile-image">
      {users.map(member => (
          <img 
            key={member}
            src={`https://i.pravatar.cc/150?img=${member}`} 
            alt={`User ${member}`} 
            className="users-image" 
          />
        ))}
        </div>
        <div className="uba-btn"><FaArrowRight /></div>
      </div>
    </div>
  );
};

export default Dashboard;
