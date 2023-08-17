import React, { useState } from "react";
import propTypes from 'prop-types';
import AppContext from "./appcontext";

//Componente que vai prover os dados:
function Provider({children}){

//const dos itens:
 const [conteudo, setConteudo] = useState([]);

  const value= {
    conteudo,
    setConteudo,
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