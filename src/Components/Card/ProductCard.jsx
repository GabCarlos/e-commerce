import React from "react";
import './ProductCard.css';
import {BsFillCartFill} from 'react-icons/bs'
import propTypes from 'prop-types'
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/appcontext";

//Função que está passando os produtos junto com os seus valores, descrições e imagens:
function ProductCard({ data }) {

  const { title, thumbnail, price } = data; //Const base das informações.

  const { cartItems, setcartItems} = useContext(AppContext);

  const handleAddCart = () => { setcartItems([ ...cartItems, data ]) };

//Passando o valor, titulo e nome do item:  
  return(

    <section className="ProductCard">
     
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="img"/>

      <div className="infos">
        <h2 className="price"> {formatCurrency(price, 'BRL')}</h2>
        <h2 className="title"> {title} </h2>
      </div>

      <button
       type="button"
       className="AddCard"
       onClick={handleAddCart}
      ><BsFillCartFill/></button>

    </section>
  );
};

export default ProductCard;

//Passando o componente props e dados:
ProductCard.propTypes = {
  data: propTypes.shape({}),

}.isRequired;
