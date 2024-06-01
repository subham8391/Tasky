import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    backlog: [],
    toDo: [],
    inProgress: [],
    done: []
  });

  const addTask = (category) => {
    const newTask = {
      id: Date.now(),
      heading: 'Task',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      members: [1, 2, 3]
    };
    setTasks(prev => ({
      ...prev,
      [category]: [...prev[category], newTask]
    }));
  };

  const removeTask = (category, taskId) => {
    setTasks(prev => ({
      ...prev,
      [category]: prev[category].filter(task => task.id !== taskId)
    }));
  };

  const categories = [
    { name: 'Backlog Tasks', key: 'backlog',bg:'bg-orange-200',text:'text-orange-800' },
    { name: 'To Do Tasks', key: 'toDo',bg:'bg-red-200',text:'text-red-800' },
    { name: 'In Process', key: 'inProgress',bg:'bg-violet-200',text:'text-violet-800' },
    { name: 'Done', key: 'done',bg:'bg-green-200',text:'text-green-800' }
  ];

  return (
    <div>
      <div className="taskboard-container">
        <div className="taskboard-title">Task Boards</div>
        <div className="search-container">
          <input type="text" placeholder="Search Tasks" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.key} className="category-card">
            <div className="category-header">
              <div className="category-title">
                <div className='ct-head'>
                <h2 className="font-semibold">{category.name}</h2>
                <p className={` ${category.bg} rounded-full ${category.text} w-6 h-6 flex justify-center items-center`}>{tasks[category.key].length}</p>
                </div>
                <BsThreeDots />
              </div>
              
              <button onClick={() => addTask(category.key)} className="add-task-button">
                <span className='bg-gray-300 p-1 rounded-full'><FaPlus/></span>
              </button>
            </div>
            {tasks[category.key].map(task => (
              <div key={task.id} className="task-card">
                <div className="task-content">
                  <div className="t-head">
                    <h2 className="text-[18px] font-bold">{task.heading}</h2>
                    <RiDeleteBinLine
                      className="text-gray-400 cursor-pointer"
                      onClick={() => removeTask(category.key, task.id)}
                    />
                  </div>
                  <div>{task.description}</div>
                  <div className="tm-info">
                    <div className="task-meta ">
                      <span className="task-meta-item">📄 2</span>
                      <span>🗨 4</span>
                    </div>
                    <div className="task-members">
                      {task.members.map((member, index) => (
                        <img
                          key={index}
                          src={`https://i.pravatar.cc/150?img=${member}`}
                          alt="member"
                          className="task-member-avatar"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
