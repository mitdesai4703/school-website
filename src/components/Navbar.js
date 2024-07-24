import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex justify-around">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
