import React from 'react';
import "./Shop.css";
import { Link } from 'react-router-dom';

export const Shop = () => {

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Cell</h1>
        <Link to="/Navbar"><button>Enter</button></Link>
        <Link to="/Cart"><button>Return</button></Link>
      </div>
    </div>
  );
};
