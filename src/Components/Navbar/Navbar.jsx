import React from "react";
import {Link} from  'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import {SearchBar} from '../SearchBar/Search';
import "./Navbar.css";

//Passando o "cabeçalho" para o Apps.
export const Navbar = () => {
  return(
  <div className="Navbar">
    <div className="links">
      <Link to="/"> Shop </Link>
        <Link to="/Cart" > <ShoppingCart size={30}/> </Link>
        <SearchBar/>
    </div>
  </div>
  )
};