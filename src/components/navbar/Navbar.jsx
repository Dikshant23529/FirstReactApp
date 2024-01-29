import React from 'react';
import './navbar.css'

const Navbar = (props) => {
return (
    <>
 <nav>
    <div className="react__nav-logo">
        <h1>{props.name}</h1>
    </div>
    <ul className="react__nav-links">
        <li className="react__nav-li">Home</li>
        <li className="react__nav-li">About</li>
        <li className="react__nav-li">Our Services</li>
        <li className="react__nav-li">Contact us</li>
        <li className="react__nav-li">Latest Update</li>
        <li className="react__nav-li">Our Blogs</li>
    </ul>

    </nav>   
    </>
)}

export default Navbar;