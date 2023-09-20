import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { SearchBar } from '../SearchBar/Search';
import Cart from '../Cart/Cart';
import AppContext from "../../context/appcontext"; // Importe o contexto do aplicativo
import "./Navbar.css";

export const Navbar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useContext(AppContext); // Acesse o estado do carrinho do contexto

// Função para abrir/fechar o carrinho
const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
};

  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <button onClick={toggleCart}>
          <ShoppingCart size={30} />
          {/* Exiba a quantidade de itens no carrinho */}
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </button>
        <SearchBar />
      </div>

      {/* Renderize o carrinho ou o conteúdo principal com base no estado */}
      {isCartOpen && <Cart />}
    </div>
  );
};
