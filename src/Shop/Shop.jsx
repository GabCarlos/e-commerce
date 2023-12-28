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

      <h1>O comércio eletrônico revolucionando o mercado</h1>

      <div className='catalogo'>
       <Link to="/catalogo"> <button className='verCatalogo'>Produtos</button> </Link>
      </div>

    </div>
    
  );
};

export default Shop;
