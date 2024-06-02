import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const TaskCard = ({ task, categoryKey, removeTask }) => (
  <div className="task-card">
    <div className="task-content">
      <div className="t-head">
        <h2 className="text-[18px] font-bold">{task.heading}</h2>
        <RiDeleteBinLine
          className="text-gray-400 cursor-pointer"
          onClick={() => removeTask(categoryKey, task.id)}
        />
      </div>
      <div>{task.description}</div>
      <div className="tm-info">
        <div className="task-meta">
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
);

export default TaskCard;
