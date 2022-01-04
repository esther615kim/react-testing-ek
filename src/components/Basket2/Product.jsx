import React from "react";
import { StyledBox,StyledStack } from "./basket.styled";
import "../styled.css"
import {Paper} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';

import { product_data } from './productData';

export default function Product() {
    // console.log(product_data);
  return (
    <StyledBox>
      <h2>New Arrivals</h2>
      <p>Featured Collection in 2022 Spring/Summer</p>
      <div className='product-list'>
          {/* card */}
          {product_data.map(item=>(
                        <Paper key={item.id} sx={{m:4,p:4,pb:2,width:160,borderRadius:5,position:"relative"}}>
                        <img className="product-img"src={item.image} alt={item.title} />
                        <div>
                            <Typography variant="button">{item.category}</Typography>
                            <Typography className="product-description" variant="subtitle2">{item.title}</Typography>
                            <Typography variant="subtitle1">£ {item.price}</Typography>
                        </div>
                        <StyledStack spacing={1}>
                            <AddShoppingCartIcon  size="large"/>
                            <FavoriteBorderIcon color="warning" size="large"/>
                        </StyledStack>
                    </Paper>
          ))}
      </div>
    </StyledBox>
  );
}

//!! pagination v페이지네이션!