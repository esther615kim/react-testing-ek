import React, { useState, useCallback } from "react";
import "../styled.css";

import { StyledBox, StyledStack, StyledPaper } from "./basket.styled";
import { IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavButton from "../FavCard/FavButton";
import {
  addToFavList,
  removeFromFavList,
} from "../../redux/features/favListSlicer";

// 컴포넌트명에 Icon이 들어 있는게 better readability
import { addToCart } from "../../redux/features/cartSlicer";

import { useDispatch } from "react-redux";


const ProductList = React.memo(({ data })=> {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);


  const handleAddtoFavList = (product) => {
    // setLiked((prev) => !prev);
    // product의 liked 속성 추기 => true로 만들기 (혹은 토글)
    dispatch(addToFavList(product));  // reducer
    console.log("좋아요",product);
  };


  const handleClicktoCart = (addedProduct) => {
    
    dispatch(addToCart(addedProduct)); // reducer
  };

  return (
    <StyledBox>
      <h2>New Arrivals</h2>
      <p>Featured Collection in 2022 Spring/Summer</p>
      <div className="product-list">
        {/* card */}
        {data.map((product) => (
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
                color="warning" size="large"onClick={() =>  handleAddtoFavList(product)} >
                <FavButton
                  liked={liked} product={product}
                />
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
