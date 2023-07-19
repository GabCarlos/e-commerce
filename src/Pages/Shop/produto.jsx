import React, { useContext } from 'react';
import {ShopContext} from  '../../context/ShopContext';

//Passando os produtos para o Shop.jsx:
export const Product = (props) => {
    
    const {id, productName, price, productImage} = props.data;
    const { addToCart, carItems } = useContext(ShopContext);

return (
    <div className='product'>
      
      <img src={productImage}/>
        
        <div className='descrição'>
          <p>
             <b> {productName} </b>
          </p>
          
          <p>
            <b> ${price} </b>
          </p>
        </div>
         
         {/*Add os itens no carrinho*/}
         <button className='addToCartBttn' onClick={() => addToCart(id)}> 
          Add To Cart
        </button>
    </div>
  );
};