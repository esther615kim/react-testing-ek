import { Typography, Stack, IconButton } from "@mui/material";
import React, { useState } from "react";
import { StyledBox, StyledStack, StyledPaper } from "../Basket/basket.styled";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteIcon } from "@mui/icons-material/Favorite";
import { FavoriteBorderIcon } from "@mui/icons-material/FavoriteBorder";

const FavCard = () => {
  // const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favs);
  console.log("즐겨찾기", favourites);
  return (
    <Stack sx={{ maxWidth: "920px" }} pt={2} direction="row" spacing={2}>
      {/* {!favourites.favList ? (
          <Typography pb={2} gutterBottom variant="subtitle1">
            Your Favlist is empty
          </Typography>
        ) : ( */}
      <>
        <StyledBox>
          <h2>My favourites</h2>
          <p>My favourites added</p>
          <div className="product-list">
            {/* card */}
            {favourites.favList.map((product) => (
              <StyledPaper key={product.id}>
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.title}
                />
                <div>
                  <Typography variant="button">{product.category}</Typography>
                  <Typography
                    className="product-description"
                    variant="subtitle2"
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="subtitle1">£ {product.price}</Typography>
                </div>
                <StyledStack spacing={0.5}>
                  <IconButton color="warning" size="large">
                    {/* {product.isLiked ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )} */}
                  </IconButton>
                </StyledStack>
              </StyledPaper>
            ))}
          </div>
        </StyledBox>
      </>
    </Stack>
  );
};

export default FavCard;

// 작업2 favlist 없을 때 카드용 이미지
// https://deliveroo.co.uk/anonymous_user_guid.gif?guid=25b5ceb3-9885-4271-ab3a-2e612c56a056
