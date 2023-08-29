import React, { useContext } from "react";
import './Cart.css';
import Cartitem from "../ItemCarrinho/Cartitem";
import AppContext from "../../context/appcontext";

//Função que define o que vai chegar no carrinho:
function Cart(){

    const {cartItens} = useContext(AppContext)//Com este array, ira redenrizar TODOS os itens dentro do carrinho:

    if (!cartItens) {
      return <p>Nenhum item no carrinho</p>;
    }

    return(
    <section className="cart">
      <div className="cart-itens">

      {cartItens.map((cartitem) => <Cartitem key={cartitem.id} data={cartitem}/>)}  

      </div>
      <div className="cart-resume">Resumo do carrinho</div>
    </section> 
  );
};

export default Cart;
