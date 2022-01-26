import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledDiv,
  StyledCard,
  StyledButton,
  StyledBasketBox,
  StyledItemBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledSubtotalBox,
  StyledDeleteItemIcon,
} from "./basket.styled";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Divider,
  Typography,
  Switch,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import ProductList from "./Product";
import {
  removeFromCart,
  decrementItemQty,
  addToCart,
} from "../../redux/features/cartSlicer";
import { useGetAllProductListQuery } from "../../redux/features/productApi";

const Basket = () => {
  // item => redux
  const { data, error, isLoading } = useGetAllProductListQuery();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrementCount = (item) => {
    dispatch(decrementItemQty(item));
  };
  const handleIncrementCount = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    // get cart when it's updated
  }, [cart]); 

  return (
    <StyledDiv>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>An error has occurred..</h3>
      ) : (
        <ProductList data={data} />
      )}

      {/* cart */}
      <StyledCard>
        <ShoppingBasketIcon sx={{ fontSize: "2.5rem" }} />
        {!cart.cartItems ? (
          <Typography pb={2} gutterBottom variant="subtitle1">
            Your basket is empty
          </Typography>
        ) : (
          <>
            <StyledBasketBox>
              <h3>Your order</h3>
              {/* cart items */}
              {cart.cartItems?.map((cartItem) => (
                <StyledItemBox key={cartItem.id}>
                  <h5>
                    {cartItem.title}
                    <IconButton
                      onClick={() => {
                        handleRemoveFromCart(cartItem);
                      }}
                    >
                      <StyledDeleteItemIcon />
                    </IconButton>
                  </h5>
                  <StyledAddIcon
                    color="primary"
                    onClick={() => {
                      handleIncrementCount(cartItem);
                    }}
                  />
                  {cartItem.qty}
                  <StyledRemoveIcon
                    color="warning"
                    onClick={() => {
                      handleDecrementCount(cartItem);
                    }}
                  />

                  <span>£ {cartItem.price * cartItem.qty}</span>
                </StyledItemBox>
              ))}
              <Divider />
              <div>
                <h3>
                  Tip{" "}
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="£0.69"
                  />
                </h3>
              </div>
              <Divider />
              <StyledSubtotalBox>
                <h3>Subtotal</h3>
                <h5>£ {cart.cartTotalAmt.toFixed(2)}</h5>
              </StyledSubtotalBox>
            </StyledBasketBox>
          </>
        )}
        <StyledButton fullWidth>Go to Checkout</StyledButton>
      </StyledCard>
    </StyledDiv>
  );
};

export default Basket;
