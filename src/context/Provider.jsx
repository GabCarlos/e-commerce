import React, { useState } from "react";
import propTypes from 'prop-types';
import AppContext from "./appcontext";

//Componente que vai prover os dados:
function Provider({children}){
const [conteudo, setConteudo] = useState([]);//const dos itens.
const [loading, setLoading] = useState(true);//Const do Loading.
const [cartItems, setCartItems] = useState([]);//Const do carrinho.

  const value= {
    conteudo,
    setConteudo,
    loading,
    setLoading,
    cartItems,
    setCartItems
  }

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;