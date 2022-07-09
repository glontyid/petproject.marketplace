import React from 'react';
import Product from './Product/Product';
import './Catalog.scss';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';

export default function Catalog({ products }) {
  let [hideButton, setHideButton] = useState(false);
  let [productCount, setProductCount] = useState(6);
  let firstProductState = products.slice(0, productCount);
  let [productItems, setProductsItems] = useState(firstProductState);

  let addProducts = () => {
    let count = productCount + 6;

    if (count < products.length) {
      let productsArray = products.slice(0, count);

      setProductCount(count);
      setProductsItems(productsArray);
    } else if (count - 6 < products.length && count > products.length) {
      let productsArray = products.slice(0, products.length);

      setProductsItems(productsArray);
      setHideButton(true);
    }
  };

  return (
    <div className="catalog">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productItems.map((item, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Product key={item.id} {...item} />
          </Grid>
        ))}
      </Grid>
      <div className="catalog__more-products-block" style={hideButton ? { display: 'none' } : {}}>
        <Button variant="outlined" onClick={addProducts}>
          Показать еще
        </Button>
      </div>
    </div>
  );
}
