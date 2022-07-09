import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decrement } from '../../../../redux/slices/cartSlice';
import './CartProduct.scss';

export default function CartProduct({ ...product }) {
  const dispatch = useDispatch();

  const incrementFn = () => {
    dispatch(addToCart(product));
  };

  const decrementFn = () => {
    dispatch(decrement(product.id));
  };

  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cart-product__name">{product.name}</div>
      <div className="cart-product__counter">
        <Button variant="text" className="cart-product__counter-decrement" onClick={decrementFn}>
          -
        </Button>
        <input
          className="cart-product__counter-value"
          type="number"
          value={product.count}
          onChange={(e) => e.target.value}
        />
        <Button variant="text" className="cart-product__counter-increment" onClick={incrementFn}>
          +
        </Button>
      </div>
      <div className="cart-product__price">$ {product.price}</div>
    </div>
  );
}
