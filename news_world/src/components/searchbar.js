import React, { useState } from 'react';
import './search.css';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Prevent default navigation when form is submitted
  const handleSubmit = (event) => {
    onSearch(searchQuery);
  };

  // Prevent default navigation when input is focused
  const handleInputClick = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='searchbar'
        placeholder='Search'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onClick={handleInputClick}
      />
    <button className='btn' onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default SearchBar;
