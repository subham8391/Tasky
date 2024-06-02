import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import TaskCard from './TaskCard';

const TaskCategory = ({ category, tasks, addTask, removeTask, filterTasks }) => (
  <div className="category-card">
    <div className="category-header">
      <div className="category-title">
        <div className='ct-head'>
          <h2 className="font-semibold">{category.name}</h2>
          <p className={` ${category.bg} rounded-full ${category.text} w-6 h-6 flex justify-center items-center`}>{tasks.length}</p>
        </div>
        <BsThreeDots />
      </div>
      <button onClick={() => addTask(category.key)} className="add-task-button">
        <span className='bg-gray-300 p-1 rounded-full'><FaPlus /></span>
      </button>
    </div>
    {filterTasks(tasks).map(task => (
      <TaskCard
        key={task.id}
        task={task}
        categoryKey={category.key}
        removeTask={removeTask}
      />
    ))}
  </div>
);

export default TaskCategory;
