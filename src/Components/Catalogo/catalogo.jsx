import React from "react";
import { Link } from "react-router-dom";

const catalogo = () => {
 return(
  <div className="catalogoProduct"> 
   
   <h1> Aqui está nossa lista de catálogo com nossos protudos excluisvos direto para você</h1>

   <Link to='/'><button className='pag_p'>Pagina Principal</button></Link>

  </div>
 );
};

export default catalogo;