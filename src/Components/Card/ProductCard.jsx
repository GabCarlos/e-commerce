import React from "react";
import "./ProductCard.css";
import { BsFillCartFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/appcontext";

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setcartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setcartItems([...cartItems, data]);
  };

  return (
    <section className="ProductCard">
      <div className="product-details">
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className="img" />
        <div className="infos">
          <h2 className="price">{formatCurrency(price, "BRL")}</h2>
          <h2 className="title">{title}</h2>
        </div>
      </div>
      <button type="button" className="AddCard" onClick={handleAddCart}>
        <BsFillCartFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export default ProductCard;
