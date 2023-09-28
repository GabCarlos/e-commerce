import React, {useState}from 'react';
import "./Shop.css";
import Cart from '../Components/Cart/Cart';

export const Shop = () => {

  const [showCart, setShowCart] = useState(false); // Variável de estado para controlar a visibilidade do carrinho
  const [showItems, setShowItems] = useState(true); // Variável de estado para controlar a visibilidade dos itens da tela principal

  // Função para alternar a visibilidade do carrinho e dos itens da tela principal
  const toggleCart = () => {
    setShowCart(!showCart);
    setShowItems(!showItems); // Alternar a visibilidade dos itens da tela principal
  };

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Cell</h1>
      </div>

      {/* Renderize os produtos apenas se showItems for verdadeiro */}
      {showItems && (
        <div className='produtos'>
          {/* Renderize os produtos aqui */}
        </div>
      )}

      {/* Botão para alternar a visibilidade do carrinho */}
      <button onClick={toggleCart} className='toggle-cart-button'>
        {showCart ? 'Esconder Carrinho' : 'Mostrar Carrinho'}
      </button>

      {/* Renderize o carrinho com base no valor de showCart */}
      {showCart && <Cart />}
    </div>
  );
};
