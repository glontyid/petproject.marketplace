import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import './Product.scss';

export default function Product({ ...product }) {
  return (
    <Card>
      <div className="product__wrapper">
        <CardMedia component="img" height="194" image={product.image} alt="Paella dish" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="product__description"
            sx={{ mb: 1 }}>
            {product.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {product.price} ₽
          </Typography>
          <CardActions sx={{ p: 0 }}>
            <Button size="small">Добавить в корзину</Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
