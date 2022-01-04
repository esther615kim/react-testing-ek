import React, { useState } from 'react';
import { StyledBox,StyledDiv, StyledCard,StyledButton } from './basket.styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Divider, Typography } from '@mui/material';
import Product from './Product';



const ITEMS  = [
  {
    storename: 'Bob Burger',
    category: ["Burger"],
    items: [
      {
        item: 'Angus burger',
        qty: 1,
        price: 7.5,
        sizes:'medium',
      },
      {
        item: 'fries',
        price: 1,
        qty: 1,
        category: 1,
        size:'medium',
      },
    ],
  },
];

const Basket2 = () => {
  // item => redux
  const [items, setItems] = useState(ITEMS)
  return (
    <StyledDiv>
      {/* products */}
      <Product/>
      {/* cart */}
      <StyledCard>
          <ShoppingBasketIcon sx={{fontSize:"2.5rem"}}/>
          {!items? <Typography pb={2} gutterBottom variant="subtitle1">Your basket is empty</Typography>:
          (

            <>
            <Divider/>
            <Typography p={2} gutterBottom variant="h6">Subtotal <span>£ 0.0</span></Typography>
            </>
          )}
          <StyledButton fullWidth>Go to Checkout</StyledButton>
      </StyledCard>

    </StyledDiv>
  );
};

export default Basket2;
