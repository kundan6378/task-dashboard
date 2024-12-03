import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, markCompleted } from '../../features/tasks/taskSlice';
import Modal from '../Modal/Modal';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setModalOpen(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={() => dispatch(markCompleted(task.id))}>
        {task.completed ? 'Completed' : 'Mark Complete'}
      </button>
      <button onClick={() => setModalOpen(true)}>Delete</button>
      <Modal
        isOpen={isModalOpen}
        message="Are you sure you want to delete this task?"
        onConfirm={handleDelete}
        onCancel={() => setModalOpen(false)}
      />
    </div>
  );
};

export default TaskItem;
