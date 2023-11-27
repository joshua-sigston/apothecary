import React, { useState } from 'react';
// styles
import './hamburger.css';

const Hamburger = ({ toggleNav, nav }) => {
  const toggleHamburger = () => {
    toggleNav(!nav);
  };

  const toggleDot = { transform: nav ? 'translateX(1rem)' : '' };
  const toggleColumn = { transform: nav ? 'translateX(-1rem)' : '' };

  return (
    <div className="hamburger flex_row" onClick={toggleHamburger}>
      <div className="dot" style={toggleDot}></div>
      <div className="column" style={toggleColumn}></div>
    </div>
  );
};

export default Hamburger;
