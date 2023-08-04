import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Nav1 = () =>{
    const[dropdownCategoriesVisible, setDropdownCategoriesVisible] = useState('')
    const[dropdownCountriesVisible, setDropdownCountriesVisible] = useState('')
    
    function handledropdownCountries(){
        if(dropdownCountriesVisible === 'none'){
            setDropdownCountriesVisible('block');
            }
            else{
                setDropdownCountriesVisible('none');
            }
    }
    function handledropdownCategories(){
        if(dropdownCategoriesVisible === 'none'){
        setDropdownCategoriesVisible('block');
        }
        else{
            setDropdownCategoriesVisible('none');
        }
    }
    return(
        <>
        <nav className='navbar'>
            <Link to='/home'>Home</Link>
            <div className="dropdown">
                <button className='dropbtn' onClick={handledropdownCategories}>Categories</button>
                <div className="dropdown-content" style={{display:dropdownCategoriesVisible}}>        
                    <Link to = '/business' onClick={handledropdownCategories}>Business</Link>
                    <Link to = '/entertainment' onClick={handledropdownCategories}>Entertainment</Link>
                    <Link to = '/general' onClick={handledropdownCategories}>General</Link>
                    <Link to = '/health' onClick={handledropdownCategories}>Health</Link>
                    <Link to = '/science' onClick={handledropdownCategories}>Science</Link>
                    <Link to = '/sports' onClick={handledropdownCategories}>Sports</Link>
                    <Link to = '/technology' onClick={handledropdownCategories}>Technology</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className='dropbtn' onClick={handledropdownCountries}>Countries</button>
                <div className="dropdown-content" style={{display:dropdownCountriesVisible}}>        
                    <Link to = '/united_arab_emirates' onClick={handledropdownCountries}>United Arab Emirates</Link>
                    <Link to = '/australia' onClick={handledropdownCountries}>Australia</Link>
                    <Link to = '/belgium' onClick={handledropdownCountries}>Belgium</Link>
                    <Link to = '/brazil' onClick={handledropdownCountries}>Brazil</Link>
                    <Link to = '/switzerland' onClick={handledropdownCountries}>Switzerland</Link>
                    <Link to = '/china' onClick={handledropdownCountries}>China</Link>
                    <Link to = '/united_kindom' onClick={handledropdownCountries}>United Kindom</Link>  
                    <Link to = '/hong_kong' onClick={handledropdownCountries}>Hong Kong</Link>
                    <Link to = '/indonesia' onClick={handledropdownCountries}>Indonesia</Link>
                    <Link to = '/india' onClick={handledropdownCountries}>India</Link>
                    <Link to = '/japan' onClick={handledropdownCountries}>Japan</Link>
                    <Link to = '/portugal' onClick={handledropdownCountries}>Portugal</Link>
                    <Link to = '/saudi_arabia' onClick={handledropdownCountries}>Saudi Arabia</Link>
                    <Link to = '/united_states_of_america' onClick={handledropdownCountries}>United States of America</Link>
                </div>
            </div>
            
        </nav>
        
        </>
)}

export default Nav1;
