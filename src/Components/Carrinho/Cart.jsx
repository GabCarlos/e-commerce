import React, { useContext } from "react";
import "./Cart.css";
import Cartitem from "../ItemCarrinho/Cartitem";
import AppContext from "../../context/appcontext";

//Função que define o que vai chegar no carrinho:
function Cart(){

  const {Cartitem} = useContext(AppContext)//Com este array, ira redenrizar TODOS os itens dentro do carrinho:

  return(
    <section className="cart">
      <div className="cart-itens">

      {Cartitem.map((Cartitem) => <Cartitem key={Cartitem.id} data={Cartitem}/>)}  

      </div>
      <div className="cart-resume">Resumo do carrinho</div>
    </section>
  );
};

export default Cart;