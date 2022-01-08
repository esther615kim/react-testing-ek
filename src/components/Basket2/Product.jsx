import React from "react";
import "../styled.css"
import { StyledBox,StyledStack,StyledPaper } from "./basket.styled";
import { IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// 컴포넌트명에 Icon이 들어 있는게 better readability
import {addToCart} from '../../redux/features/cartSlicer';
// import {addToCart} from '../redux/features/cartSlicer'
import {useDispatch} from "react-redux";

export default function ProductList({data}) {
  const dispatch = useDispatch();

  const handleClicktoCart = (addedProduct)=>{
    console.log(addedProduct);
    dispatch(addToCart(addedProduct)); // reducer
  }

  return (
    <StyledBox>
      <h2>New Arrivals</h2>
      <p>Featured Collection in 2022 Spring/Summer</p>
      <div className='product-list'>
          {/* card */}
          {data.map(product=>(
                        <StyledPaper key={product.id}>
                        <img className="product-img"src={product.image} alt={product.title} />
                        <div>
                            <Typography variant="button">{product.category}</Typography>
                            <Typography className="product-description" variant="subtitle2">{product.title}</Typography>
                            <Typography variant="subtitle1">£ {product.price}</Typography>
                        </div>
                        <StyledStack spacing={0.5}>
                          <IconButton onClick={()=> handleClicktoCart(product)}>
                            <AddShoppingCartIcon  size="large"/>
                            </IconButton>
                            <IconButton>
                            <FavoriteBorderIcon color="warning" size="large"/>
                            </IconButton>
                        </StyledStack>
                    </StyledPaper>
          ))}
      </div>
    </StyledBox>
  );
}

//!! pagination v페이지네이션 넣기