import React, { useState } from 'react';
import TaskBoard from './TaskBoard/TaskBoard';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Tasks');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

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
        {/* Add more tabs here */}
      </div>
    </div>
  );
};

export default Dashboard;
