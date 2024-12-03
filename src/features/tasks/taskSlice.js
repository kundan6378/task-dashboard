import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'All Tasks',
  searchTerm: '', // Add searchTerm to the state
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) Object.assign(task, updates);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    markCompleted: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = true;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  markCompleted,
  setFilter,
  setSearchTerm,
} = taskSlice.actions;

export default taskSlice.reducer;
