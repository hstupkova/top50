import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div>Top 50 books</div>
      <ul>
        <li><NavLink to="/readers">Readers</NavLink></li>
        <li><NavLink to="/comparison">Comparison</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
