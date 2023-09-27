//import React from 'react';
//import "./Shop.css";

{/*//Colocando os produtos com as suas imagens, descrições e preços na tela principal:
export const Shop = () => {
  return (

    <div className='shop'>

        <div className='shopTitle'>
            <h1>BFR</h1>
        </div>
    </div>

  );
};*/}

import React, { useState } from 'react';
import './Shop.css';
import Cart from '../Components/Cart/Cart';

export const Shop = () => {
  const [showItems, setShowItems] = useState(true); // Variável de estado para controlar a visibilidade dos itens da tela principal

  // Função para alternar a visibilidade dos itens da tela principal
  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>BFR</h1>
      </div>

      {/* Renderize os produtos apenas se showItems for verdadeiro */}
      {showItems && (
        <div className='produtos'>
          {/* Renderize os produtos aqui */}
        </div>
      )}

      {/* Botão para alternar a visibilidade dos itens da tela principal */}
      <button onClick={toggleItems} className='toggle-items-button'>
        {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
      </button>

      {/* Renderize o carrinho */}
      <Cart />
    </div>
  );
};
