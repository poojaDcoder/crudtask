import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
   <nav>
        <div className='header'>
           <h1>Crud</h1> 
        </div>
        <div className='navItems'>
        <NavLink to="/home">Home Page</NavLink>
        <NavLink to="/about">About Page</NavLink>
        <NavLink to="/contact">Contact Page</NavLink>
        <Link to={"/users/add"} className="btn btn-outline-success">
           Add User
        </Link>
        </div>
   </nav>
  )
}

export default Navbar;