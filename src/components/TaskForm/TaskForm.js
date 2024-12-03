import React, { useState } from 'react';
import './TaskForm.css';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../../features/tasks/taskSlice';

const TaskForm = ({ mode = 'add', task = null, onClose }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: mode === 'add' ? Date.now().toString() : task.id,
      title,
      description,
      dueDate,
      completed: task?.completed || false,
    };

    if (mode === 'add') {
      dispatch(addTask(newTask));
    } else {
      dispatch(editTask({ id: task.id, updates: newTask }));
    }

    onClose();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{mode === 'add' ? 'Add Task' : 'Edit Task'}</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">{mode === 'add' ? 'Add Task' : 'Save Changes'}</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
