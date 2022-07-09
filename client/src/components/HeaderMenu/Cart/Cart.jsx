import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Tooltip, tooltipClasses } from '@mui/material';
import CartProduct from './CartProduct/CartProduct';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 410,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: 20,
  },
}));

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.products);

  if (cartProducts.length) {
    return (
      <HtmlTooltip
        title={
          <React.Fragment>
            {cartProducts.map((product, index) => {
              return <CartProduct {...product} key={index} />;
            })}
          </React.Fragment>
        }>
        <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartProducts.length} color="primary">
              <ShoppingCartIcon color="primary" />
            </StyledBadge>
          </IconButton>
        </Link>
      </HtmlTooltip>
    );
  }

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartProducts.length} color="primary">
          <ShoppingCartIcon color="primary" />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
