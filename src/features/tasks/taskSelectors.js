export const selectFilteredTasks = (state) => {
  const { tasks, filter, searchTerm } = state.tasks;
  const currentDate = new Date();

  let filteredTasks = tasks;

  // Apply filter
  switch (filter) {
    case 'Completed':
      filteredTasks = filteredTasks.filter((task) => task.completed);
      break;
    case 'Pending':
      filteredTasks = filteredTasks.filter(
        (task) => !task.completed && new Date(task.dueDate) >= currentDate
      );
      break;
    case 'Overdue':
      filteredTasks = filteredTasks.filter(
        (task) => !task.completed && new Date(task.dueDate) < currentDate
      );
      break;
    default:
      break;
  }

  // Apply search term
  if (searchTerm) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filteredTasks;
};
