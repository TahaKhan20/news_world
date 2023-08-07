import React, { useState } from 'react';
import './search.css';

function SearchBar({ onSearch }) {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the onSearch function passed from the parent component
    onSearch(searchQuery);
  };

  // Handle input click to prevent default navigation
  const handleInputClick = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering search query */}
      <input
        type="text"
        className='searchbar'
        placeholder='Search'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onClick={handleInputClick}
      />
      {/* Button to initiate search */}
      <button className='btn' onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default SearchBar;
