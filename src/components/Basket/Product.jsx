import React, { useState,useEffect} from "react";
import "../styled.css";

import { StyledBox, StyledStack, StyledPaper } from "./basket.styled";
import { IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addToFavList
} from "../../redux/features/favListSlicer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import {product_data} from './productData';
import { addToCart } from "../../redux/features/cartSlicer";
import { useDispatch } from "react-redux";



const ProductList = React.memo(({ data })=> {
  const dispatch = useDispatch();
  const [latestData,setlaTestData] = useState(data);
  const [favourite, setFavoruite] = useState(false);
  useEffect(()=>{
    setlaTestData(prev=>data)
  },[data])

  const handleAddtoFavList = (product) => {
    setFavoruite((prev) => !prev);
    dispatch(addToFavList(product));  // reducer
    // }else{
      
    // }
  };


  const handleClicktoCart = (addedProduct) => {
    dispatch(addToCart(addedProduct)); 
  };

  return (
    <StyledBox>
      <h2>New Arrivals</h2>
      <p>Featured Collection in 2022 Spring/Summer</p>
      <div className="product-list">
        {/* card */}
        {/* {product_data.map((product) => ( */}
         {latestData.map((product) => (
          <StyledPaper key={product.id}>
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />
            <div>
              <Typography variant="button">{product.category}</Typography>
              <Typography className="product-description" variant="subtitle2">
                {product.title}
              </Typography>
              <Typography variant="subtitle1">£ {product.price}</Typography>
            </div>
            <StyledStack spacing={0.5}>
              <IconButton onClick={() => handleClicktoCart(product)}>
                <AddShoppingCartIcon size="large" />
              </IconButton>

              <IconButton
                color="warning" size="large" onClick={() => handleAddtoFavList(product)} >
                  {favourite?<FavoriteIcon />:< FavoriteBorderIcon />}
              </IconButton>
            </StyledStack>
          </StyledPaper>
        ))}
      </div>
    </StyledBox>
  );
});
export default ProductList;

//!! pagination v페이지네이션 넣기
