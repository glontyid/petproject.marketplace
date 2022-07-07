import React from "react"
import { Button } from '@mui/material';
import './Product.scss';

export default function Product({...product}) {
  return (
    <div className="product">
        <div className="product__wrapper">
            <div className="product__image-block">
                <img src={product.image} alt="" />
            </div>
            <div className="product__title-block">
                <span className="product__title">{product.name}</span>
            </div>
            <div className="product__price-block">
                <span className="product__price">{product.price} ₽</span>
            </div>      
            <div className="product__busket-block">
                <Button variant="outlined">Добавить в корзину</Button>
            </div>                            
        </div>
    </div>
  )
}
