import React from "react";
import './Cartitem.css'
import {MdDeleteForever} from 'react-icons/md'
import formatCurrency from "../../utils/formatCurrency";
import propTypes from 'prop-types';

//Função que contem os dados do item no carrinho:
function Cartitem({data}){

  const {thumbnail, tilte, price} = data;
  return(
    <section className="cart-item">

      <img
       src={thumbnail}
       alt="image of product"
       className="cart-item-image"/>

       <div className="cart-item-content">
        <h3 className="cart-item-title">{tilte}</h3>
        {/*<h3 className="cart-item-price">{formatCurrency (price)}</h3>*/}
       </div>

       <button 
       type="button"
       className="button-remove-item">
       <MdDeleteForever/>
       </button>

    </section>
  );
};

export default Cartitem;