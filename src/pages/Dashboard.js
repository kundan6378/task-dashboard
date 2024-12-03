import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';
import { selectFilteredTasks } from '../features/tasks/taskSelectors';
import TaskForm from '../components/TaskForm/TaskForm';
import TaskList from '../components/TaskList/TaskList';
import FilterBar from '../components/FilterBar/FilterBar';
import SearchBar from '../components/SearchBar/SearchBar';
import './Dashboard.css';

const Dashboard = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  
  
  return (
    <div className="dashboard">
      <h1>Task Management Dashboard</h1>
      <SearchBar />
      <FilterBar
        filters={['All Tasks', 'Completed', 'Pending', 'Overdue']}
        onFilterChange={handleFilterChange}
      />
      <button onClick={() => setFormOpen(true)}>Add Task</button>
      <TaskList tasks={tasks} />
      {isFormOpen && (
        <TaskForm mode="add" onClose={() => setFormOpen(false)} />
      )}
    </div>
  );
};

export default Dashboard;
