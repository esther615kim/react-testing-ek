import React from "react";
import Type from "./Type";
import "./styled.css";
import { Typography, Button } from "@mui/material";

export default function OrderPage() {
  return (
    <div>
      {/* text-align left 적용ㅜ*/}
      <div className="wrapper">
        <Typography pt={2} variant="h5">
          Countries
        </Typography>
        <Type orderType="products" />
      </div>
      <div className="wrapper option">
        <Typography pt={2} variant="h5">
          Options
        </Typography>
        <Type orderType="options" />
      </div>
      <div className="wrapper">
        <Typography pt={2} variant="h5">
          Total Price
        </Typography>
        <Button
          mt={2}
          variant="contained"
          className="order-button"
          sx={{ backgroundColor: "#eb345b" }}
        >
          Order now
        </Button>
      </div>
    </div>
  );
}
