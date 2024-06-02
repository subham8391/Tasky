import React, { useState } from 'react';
import { FaPlus, FaSearch, FaPen } from 'react-icons/fa';
import TaskCategory from './TaskCategory';
import { taskTemplates } from '../../ConstantData';
import { categories } from '../../ConstantData';
const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    backlog: [],
    toDo: [],
    inProgress: [],
    done: []
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [boardTitle, setBoardTitle] = useState('Task Boards');

  const addTask = (category) => {
    const randomTask = taskTemplates[Math.floor(Math.random() * taskTemplates.length)];
    const newTask = {
      id: Date.now(),
      heading: randomTask.heading,
      description: randomTask.description,
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterTasks = (tasks) => {
    return tasks.filter(task =>
      task.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleTitleChange = (e) => {
    setBoardTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  return (
    <div>
      <div className="taskboard-container">
        <div className="taskboard-title">
          {isEditingTitle ? (
            <input
              type="text"
              value={boardTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleTitleKeyDown}
              className="title-input"
              autoFocus
            />
          ) : (
            <>
              {boardTitle}
              <FaPen
                className='text-gray-400 text-sm ml-2 cursor-pointer'
                onClick={() => setIsEditingTitle(true)}
              />
            </>
          )}
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Tasks"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="category-grid">
        {categories.map(category => (
          <TaskCategory
            key={category.key}
            category={category}
            tasks={tasks[category.key]}
            addTask={addTask}
            removeTask={removeTask}
            filterTasks={filterTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
