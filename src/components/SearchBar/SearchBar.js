import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../features/tasks/taskSlice';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks by title..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
