import React from 'react';
import "./Shop.css";  
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Cell</h1>
        <Link to="/Navbar"><button>Enter</button></Link>
        <Link to="/Cart"><button>Cart</button></Link>
      </div>
    </div>
  );
};

export default Shop;
