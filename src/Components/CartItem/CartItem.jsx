import React from 'react';
import './CartItem.css';
import { MdRemoveCircle } from 'react-icons/md';
import formatCurrency from '../../utils/formatCurrency';

function CartItem({ data }) {
  const { thumbnail, title, price } = data;

  return (
    <section className='cart-item'>
      <img src={thumbnail} alt='imagem do produto' className='cart-item-image' />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>

        <button
          type='button'
          className='remove-item'
        >
          <MdRemoveCircle />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
