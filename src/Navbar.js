/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = function () {
  return (
    <nav className="navbar">
      <h1>Good Spoon</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"> New recipe</Link>
      </div>
    </nav>
  );
};

export default Navbar;
