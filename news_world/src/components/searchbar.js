import React, { useState } from 'react';
import './search.css';

function SearchBar({ onSearch }) { // Rename the prop to onSearch
    const [searchQuery, setSearchQuery] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Call the onSearch prop with the searchQuery value
            onSearch(searchQuery);
        }
    };

    return (
        <input
            type='text'
            className='searchbar'
            placeholder='Search'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
}

export default SearchBar;
