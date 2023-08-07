import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import SearchBar from './searchbar';

const Nav1 = ({ onSearch }) => {
  const [dropdownCategoriesVisible, setDropdownCategoriesVisible] = useState('');
  const [dropdownCountriesVisible, setDropdownCountriesVisible] = useState('');

  // Handle showing/hiding the countries dropdown
  function handledropdownCountries() {
    if (dropdownCountriesVisible === 'none') {
      setDropdownCountriesVisible('block');
      setDropdownCategoriesVisible('none');
    } else {
      setDropdownCountriesVisible('none');
    }
  }

  // Handle showing/hiding the categories dropdown
  function handledropdownCategories() {
    if (dropdownCategoriesVisible === 'none') {
      setDropdownCategoriesVisible('block');
      setDropdownCountriesVisible('none');
    } else {
      setDropdownCategoriesVisible('none');
    }
  }

  return (
    <>
      <nav className='navbar'>
        {/* Home link */}
        <Link to='/'>Home</Link>
        
        {/* SearchBar component */}
        <Link to='/search' id='searchbar'><SearchBar onSearch={onSearch} /></Link>
        
        {/* Categories dropdown */}
        <div className="dropdown">
          <button className='dropbtn' onClick={handledropdownCategories}>Categories</button>
          <div className="dropdown-content" style={{ display: dropdownCategoriesVisible }}>
            {/* Category links */}
            <Link to='/business' onClick={handledropdownCategories}>Business</Link>
            {/* ... (other category links) ... */}
          </div>
        </div>
        
        {/* Countries dropdown */}
        <div className="dropdown">
          <button className='dropbtn' onClick={handledropdownCountries}>Countries</button>
          <div className="dropdown-content" style={{ display: dropdownCountriesVisible }}>
            {/* Country links */}
            <Link to='/united_arab_emirates' onClick={handledropdownCountries}>United Arab Emirates</Link>
            {/* ... (other country links) ... */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav1;
